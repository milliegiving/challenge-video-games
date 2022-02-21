import React from 'react';

import Loading from './loading';

class App extends React.Component {

  renderTemplate() {
    return (
      <div>
        <input className="search-input" placeholder="Search..." />
        <p className="search-pending">Searching "Mario"...</p>
        <div className="games">

          <div className="game closed">
            <div className="game-cover">
              <img className="game-cover-img" src="https://millie-dev-tybro.s3.amazonaws.com/video-game-challenge/games/1074.png" />
              <h2 className="game-cover-title">Super Mario 64</h2>
            </div>
          </div>

          <div className="game open">
            <div className="game-cover">
              <img className="game-cover-img" src="https://millie-dev-tybro.s3.amazonaws.com/video-game-challenge/games/1068.png" />
              <h2 className="game-cover-title">Super Mario Bros. 3</h2>
            </div>
            <div className="game-details">
              <Loading />
            </div>
          </div>

          <div className="game open">
            <div className="game-cover">
              <img className="game-cover-img" src="https://millie-dev-tybro.s3.amazonaws.com/video-game-challenge/games/26758.png" />
              <h2 className="game-cover-title">Super Mario Odyssey</h2>
            </div>
            <div className="game-details">
              <h3 className="game-details-heading">Details</h3>
              <p className="game-details-p">Released: Oct 26, 2017</p>
              <p className="game-details-p">Genres: Platform, Adventure</p>
              <p className="game-details-p">Engine: </p>
              <h3 className="game-details-heading">Platforms</h3>
              <div className="game-details-platforms">
                <div className="platform">
                  <img className="platform-logo" src="https://millie-dev-tybro.s3.amazonaws.com/video-game-challenge/platforms/130.png" />
                  <div className="platform-name">Switch</div>
                </div>
              </div>
              <h3 className="game-details-heading">Developer</h3>
              <div className="developer">
                <p className="developer-name">Other games by <b>Nintendo</b></p>
                <div className="developer-games">
                  <div className="other-game">
                    <img className="other-game-cover" src="https://millie-dev-tybro.s3.amazonaws.com/video-game-challenge/games/1026.png" alt="The Legend of Zelda: A Link to the Past" />
                  </div>
                  <div className="other-game">
                    <img className="other-game-cover" src="https://millie-dev-tybro.s3.amazonaws.com/video-game-challenge/games/1070.png" alt="Super Mario World" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  render() {
    return this.renderTemplate();
    return (
      <div>
      </div>
    );
  }

}

export default App;

