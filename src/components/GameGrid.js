import React, { Component } from 'react';
import SnakeModel from '../models/SnakeModel';
import GridCell from './GridCell';
import Utils from '../services/utils';

class GameGrid extends Component {

    snakeModel;

    constructor(props) {
        super(props);

        this.snakeModel = new SnakeModel(this.props.rows, this.props.cols);

        this.state = {
            snakeCells: []
        };

        this.changeDirection = this.changeDirection.bind(this);
        document.onkeydown = this.changeDirection;
        this.handleInterval();
    }

    getHeadCell() {
        return this.snakeModel[0];
    }

    changeDirection(event) {
        this.snakeModel.setDirection(event.code);
    }

    handleInterval() {
        this.snakeModel.setDirection('ArrowRight'); // remove

        setInterval(() => {
            this.snakeModel.growSnake();
            this.setState(
                { snakeCells: this.snakeModel.getSnakeCells() }
            );
        }, this.props.timeBetweenMovesMs);
    }

    isSnakeCell(row, col) {
        return Utils.containsCell(this.state.snakeCells, {row: row, col: col});
    }

    createGrid() {
        let table = []

        for (let i = 0; i < this.props.rows; i++) {
            let children = [];
            for (let j = 0; j < this.props.cols; j++) {
                const cellType = (this.isSnakeCell(i, j) ? 'snake' : '');
                const keyString = i + '' + j;
                 children.push(<td className='gridCell' key={keyString}><GridCell type={cellType} /></td>);
            }
            table.push(<tr key={i}>{children}</tr>)
        }
        return table;
    }


    render() {
        return (
            <table>
                <tbody>
                    {this.createGrid()}
                </tbody>
            </table>
        )
    }

}

export default GameGrid;
