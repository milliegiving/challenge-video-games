# Start Here
In this challenge you'll use a provided API to build a UI for browsing video games. To see what the end result should look like and to get oriented quickly, watch the video:
-video-

# What's Provided
Use this repo as your starting point. It contains:
- Boilerplate to initialize React+Redux, and a watch task that rebuilds bundle.js upon file changes. Babel is in place so JSX, `import`, `async`/`await`, etc work.
- CSS and example markup - use the provided markup, and you won't need to worry about HTML/CSS.
- A server with API endpoints you'll need for the data. The endpoints are:
```
GET /api/games?search=[searchString]
GET /api/games/[gameId]
GET /api/developers/[developerId]
GET /api/platforms/[platformId]
```

# Running This Repo
```sh
cd challenge-video-games
nvm install
nvm use
npm install
npm start
# server will run on port 1114
```

# Requirements
## As a user, I can:
- See a list of video games that match my search string
- Click on a game to see: game details, platforms, developer, and other games by the developer
## Details
- Search for games automatically when typing stops (but _not_ on every key stroke)
- Ensure that no unnecessary renders happen (e.g. when a game card is opened, only it and the one closing should render and the rest of the list should not)
- Optimize fetching of resources so that loading all game details happens as fast as possible
- Render data as soon as it's available (as opposed to waiting for all data)
- Don't fetch any particular resource more than once
## Also Note
- Don't modify the contents of `server/`.
- Feel free to add libraries.
- Leaving notes about design decisions and trade-offs with alternatives is encouraged.
- Classical components preferred.

# Submission
Please do _not_ fork this repo or put your solution on Github. Rather, make a `.zip` (without `node_modules/` to reduce file size) and email it to engineering@milliegiving.com.
