import React, { Component } from 'react';
import './App.scss';

import GameGrid from './components/GameGrid';
import Controls from './components/Controls';

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

  render() {
    return (
      <div className="app">
        <GameGrid
          rows={this.rows}
          cols={this.cols}
          timeBetweenMovesMs={this.timeBetweenMovesMs}
          isGameStarted={this.state.gameStarted}
        />
        <Controls
          startGame={this.doStart}
        >
        </Controls>

      </div>
    );
  }
}

export default App;
