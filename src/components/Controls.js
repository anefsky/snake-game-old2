import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

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
                <Button 
                    onClick={this.handleStartClick}
                    disabled={this.props.startButtonDisabled}
                >
                    Start Game
                </Button>
            </div>
        )
    }
}

export default Controls;