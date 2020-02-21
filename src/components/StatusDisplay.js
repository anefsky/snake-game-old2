import React, {Component} from 'react';

class StatusDisplay extends Component {


    render() {
        const gameStatusText = this.props.score && !this.props.gameActive ? 
            'score: ' +this.props.score : '';
        return(
            <div className="status-display">
                <h2>{gameStatusText}</h2>
            </div>
        );
    }
}

export default StatusDisplay;