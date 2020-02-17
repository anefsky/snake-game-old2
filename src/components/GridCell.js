import React, {Component} from 'react';

export default class GridCell extends Component {
    render() {
        // const classNames = this.props.type;
        return (
            <div className={[this.props.type, 'cellContent'].join(' ')}>
           </div>
        );
    }
}
