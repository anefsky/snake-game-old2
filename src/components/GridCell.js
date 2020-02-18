import React, {Component} from 'react';

export default class GridCell extends Component {
    render() {
        return (
            <div className={[this.props.type, 'cellContent'].join(' ')}>
           </div>
        );
    }
}
