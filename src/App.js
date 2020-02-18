import React, { Component } from 'react';
import './App.scss';

import GameGrid from './components/GameGrid';
import Controls from './components/Controls';
// import EndOfGameResponse from './components/EndOfGameResponse';

class App extends Component {

  snakeModel;
  rows = 10;
  cols = 10;
  timeBetweenMovesMs = 250;

  constructor() {
    super();
    this.state = {
      gameStarted: false
    };

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
        />
        <Controls
          startGame={this.doStart}
          startButtonDisabled={this.state.gameStarted}
        >
        </Controls>
{/* 
        <EndOfGameResponse>
          
        </EndOfGameResponse>
 */}
      </div>
    );
  }
}

export default App;
