import React, {Component} from 'react';

class GridCell extends Component {
    render() {
        const classNames = this.props.type;
        return (
            <div className={classNames}>
           </div>
        );
    }
}

export default GridCell;