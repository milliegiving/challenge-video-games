const path = require('path');
const http = require('http');
const fs = require('fs');

const _ = require('lodash');
const express = require('express');

const gamesById = require('./data/games.json');
const developersById = require('./data/developers.json');
const platformsById = require('./data/platforms.json');

const sortedGames = _.sortBy(Object.values(gamesById), 'ratingCount').reverse();
const router = express.Router();
const s3BaseUrl = 'https://millie-dev-tybro.s3.amazonaws.com/video-game-challenge';

const start = () => {
  const port = 1114;
  const app = express();
  const server = http.createServer(app);
  app.use(express.static(path.join(__dirname, './public')));
  app.use('/', router);
  server.listen(port);
  server.on('listening', () => {
    console.log(`Server started on port ${port}.`);
  });
};

const send = (res, data) => {
  const ms = Math.round(Math.random() * 1000) + 500;
  setTimeout(() => {
    res.send({data});
  }, ms);
};

router.get('/api/games', (req, res) => {
  const {search} = req.query;
  const data = sortedGames
    .filter((game) => {
      if (!search) return true;
      return game.name.toUpperCase().includes(search.toUpperCase());
    })
    .slice(0, 50)
    .map((game) => ({
      id: game.id,
      name: game.name,
      coverUrl: `${s3BaseUrl}/games/${game.id}.png`,
    }));
  send(res, data);
});

router.get('/api/games/:gameId', (req, res) => {
  const game = gamesById[req.params.gameId];
  if (!game) {
    return res.status(404).send('not found');
  }
  const data = {
    ..._.omit(game, ['coverImageId']),
    coverUrl: `${s3BaseUrl}/games/${game.id}.png`,
  };
  send(res, data);
});

router.get('/api/platforms/:platformId', (req, res) => {
  const platform = platformsById[req.params.platformId];
  if (!platform) {
    return res.status(404).send('not found');
  }
  const data = {
    ..._.omit(platform, ['logoImageId']),
    logoUrl: `${s3BaseUrl}/platforms/${platform.id}.png`,
  };
  send(res, data);
});

router.get('/api/developers/:developerId', (req, res) => {
  const developer = developersById[req.params.developerId];
  if (!developer) {
    return res.status(404).send('not found');
  }
  const data = {
    ..._.omit(developer, ['logoImageId']),
    gameIds: developer.gameIds.slice(0, 12),
    logoUrl: `${s3BaseUrl}/developers/${developer.id}.png`,
  };
  send(res, data);
});

module.exports = {
  start,
};
