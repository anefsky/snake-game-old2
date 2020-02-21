import React, { Component } from 'react';
import './App.scss';

import GameGrid from './components/GameGrid';
import Controls from './components/Controls';
import StatusDisplay from './components/StatusDisplay';

class App extends Component {

  snakeModel;
  rows = 10;
  cols = 10;
  timeBetweenMovesMs = 250;

  constructor() {
    super();
    this.state = {
      gameStarted: false,
      score: 0
    };
  }

  getScoreFunction = (score) => {
    this.setState( {score: score });
  }

  doStart = () => {
    this.setState( {
      gameStarted: true
    });
  }

  doGameEnded = () => {
    this.setState( {
      gameStarted: false
    });
  }

  render() {
    return (
      <div className="app">
        <GameGrid
          rows={this.rows}
          cols={this.cols}
          timeBetweenMovesMs={this.timeBetweenMovesMs}
          isGameStarted={this.state.gameStarted}
          gameEnded={this.doGameEnded}
          getScoreCallback={this.getScoreFunction}
        />
        <footer className='footer'>
          <Controls
            startGame={this.doStart}
            startButtonDisabled={this.state.gameStarted}
          >
          </Controls>
          <StatusDisplay
            score={this.state.score}
            gameActive={this.state.gameStarted}
          >
          </StatusDisplay>
        </footer>
      </div>
    );
  }
}

export default App;
