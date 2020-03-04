import React, { Component } from 'react';
import './App.scss';

import GameGrid from './components/GameGrid';
import Controls from './components/Controls';
import StatusDisplay from './components/StatusDisplay';
import DirectionButtons from './components/DirectionButtons';

class App extends Component {

  snakeModel;
  rows = 10;
  cols = 10;
  timeBetweenMovesMs = 250;

  constructor() {
    super();
    this.state = {
      gameStarted: false,
      score: 0,
      snakeDirection: ''
    };

    this.changeDirectionFromKeyboard = this.changeDirectionFromKeyboard.bind(this);
    document.onkeydown = this.changeDirectionFromKeyboard;
 
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

  setDirection = (dir) => {
    this.setState({snakeDirection: dir});
  }

  changeDirectionFromKeyboard(event) {
      event.preventDefault();  // stop grid from repositioning
      const keyEventToActionMap = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right'
      }
      this.setDirection(keyEventToActionMap[event.key]);
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
          snakeDirection={this.state.snakeDirection}
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
        <DirectionButtons
          setDirection={this.setDirection}
        >
        </DirectionButtons>
      </div>
    );
  }
}

export default App;
