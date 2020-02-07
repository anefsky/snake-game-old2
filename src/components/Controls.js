import React, {Component} from 'react';

class Controls extends Component {

    constructor(props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
    }

    handleStartClick() {
        this.props.startGame();
    }

    render() {
        return (
            <div className="controls">
                <button onClick={this.handleStartClick}>Start Game</button>
            </div>
        )
    }
}

export default Controls;