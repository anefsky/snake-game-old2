import React, {Component} from 'react';

export default class GridCell extends Component {
    render() {
        const classNames = this.props.type;
        return (
            <div className={classNames}>
           </div>
        );
    }
}
