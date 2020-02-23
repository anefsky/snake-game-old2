import React, {Component} from 'react';

export default class GridCell extends Component {
    render() {
        const style = {opacity: (Math.max( 40, (100 - (10 * this.props.position)))) / 100};

       let cellPositionClass = '';
        let gameOverStatusClass = '';

        if(this.props.type === 'snake' && this.props.position === 0) {
            cellPositionClass = 'head';
        }

        if(this.props.gameOver) {
            gameOverStatusClass = 'gameOver';
        }

        const directionClass = this.props.direction;

        return (
            <div 
                className={[this.props.type, 'cellContent', directionClass,
                        cellPositionClass, gameOverStatusClass].join(' ')}
                    style={style}
            >
           </div>
        );
    }
}
