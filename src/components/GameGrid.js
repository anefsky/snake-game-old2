import React, { Component } from 'react';
import SnakeModel from '../models/SnakeModel';
import GridCell from './GridCell';
import Utils from '../services/utils';

export default class GameGrid extends Component {

    snakeModel;

    constructor(props) {
        super(props);

        this.changeDirection = this.changeDirection.bind(this);
        document.onkeydown = this.changeDirection;

        this.snakeModel = new SnakeModel(this.props.rows, this.props.cols);

        this.state = {
            snakeCells: [],
            appleCell: {},
            gameOver: false,
            gameStarted: this.props.isGameStarted
        };


        this.startGame();
    }

    changeDirection(event) {
        this.snakeModel.setDirection(event.code);
    }

    startGame() {
        let isFirstRun = true;
        let interval = setInterval(() => {
            if(isFirstRun) {
                isFirstRun = false;
            } else {
                this.snakeModel.setNewHeadCell();
            }
             
            if(this.snakeModel.isMoveOffBoard() || this.snakeModel.isMoveOnSnakeBody()) {
                this.setState( {
                    gameOver: true
                });
                clearInterval(interval);
            }
            if(this.snakeModel.isMoveToEatApple()) {
                this.snakeModel.growSnake();
                this.snakeModel.moveApple();
            } else {
                this.snakeModel.moveSnake();
            }
            
            if(this.state.gameOver) { 
                alert('game over, score: ' + this.state.snakeCells.length);
            } else {
                this.setState(
                    {   
                        snakeCells: this.snakeModel.getSnakeCells(),
                        appleCell: this.snakeModel.getAppleCell()
                    }
                );
            }
        }, this.props.timeBetweenMovesMs);
    }

    isSnakeCell(row, col) {
        return Utils.containsCell(this.state.snakeCells, {row: row, col: col});
    }

    isAppleCell(row, col) {
        return Utils.doCellsMatch(this.state.appleCell, {row: row, col: col})
    }

    createGrid() {
        let table = []

        for (let i = 0; i < this.props.rows; i++) {
            let children = [];
            for (let j = 0; j < this.props.cols; j++) {
                let cellType;
                if(this.isSnakeCell(i, j)) {
                    cellType = 'snake';
                } else if (this.isAppleCell(i, j)) {
                    cellType = 'apple'
                }

                const keyString = i + '' + j;
                children.push(<td className='gridCell' key={keyString}><GridCell type={cellType} /></td>);
            }
            table.push(<tr key={i}>{children}</tr>)
        }
        return table;
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.createGrid()}
                    </tbody>
                </table>
                <p>{this.props.isGameStarted ? 'started' : 'not started'}</p>
            </div>
        )
    }

}
