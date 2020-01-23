import React, { Component } from 'react';
import './App.scss';

import GameGrid from './components/GameGrid';

class App extends Component {

  snakeModel;
  rows = 10;
  cols = 10;
  timeBetweenMovesMs = 250;

  render() {
    return (
      <div>
        <GameGrid
          rows={this.rows}
          cols={this.cols}
          timeBetweenMovesMs={this.timeBetweenMovesMs}
        />
      </div>
    );
  }
}

export default App;
