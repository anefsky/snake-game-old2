import React, {Component} from 'react';

export default class GridCell extends Component {
    render() {
       const style = this.props.position === 0 && this.props.type === 'snake' && this.props.gameOver ?
        {backgroundColor: 'orange'} : {opacity: Math.max( 40, (100 - (10 * this.props.position))) + '%'}
        return (
            <div 
                className={[this.props.type, 'cellContent'].join(' ')}
                    style={style}
            >
           </div>
        );
    }
}
