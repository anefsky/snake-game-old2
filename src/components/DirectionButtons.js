import React, {Component} from 'react';



class DirectionButtons extends Component {


    goUp = () => this.props.setDirection('up');
    goDown = () => this.props.setDirection('down');
    goLeft = () => this.props.setDirection('left');
    goRight = () => this.props.setDirection('right');
    
    
    render() {
        return (
            <div className="direction-buttons">
                <button onClick={this.goUp}
                >&uarr;               
                </button>
                <div className="center-buttons">
                    <button onClick={this.goLeft}
                    >&larr;
                    </button>
                    <button onClick={this.goRight}
                    >&rarr;
                    </button>
                    </div>
                <button  onClick={this.goDown}
                >&darr;
                </button>
            </div>
        )
    }
    
}

export default DirectionButtons;