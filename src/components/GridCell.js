import React, {Component} from 'react';

export default class GridCell extends Component {
    render() {
        return (
            <div 
                className={[this.props.type, 'cellContent'].join(' ')}
                style={{opacity: Math.max( 20, (100 - (10 * this.props.position))) + '%'}}
            >
           </div>
        );
    }
}
