import React, {Component} from 'react';

export default class GridCell extends Component {
    render() {
        // const style = this.props.position === 0 && this.props.type === 'snake' && this.props.gameOver ?
        // {backgroundColor: 'orange'} : {opacity: Math.max( 40, (100 - (10 * this.props.position))) + '%'}
        // const opacity = (Math.max( 40, (100 - (10 * this.props.position)))) / 100;


        // const opacity = Math.max(10, 20);

        // console.log('position: ', this.props.position);

        // console.log('opacity: ', opacity);
        // const style = this.props.position === 0 && this.props.type === 'snake' && this.props.gameOver ?
        // {} : {opacity: (Math.max( 40, (100 - (10 * this.props.position)))) / 100}

        const style = {};
        
        return (
            <div 
                className={[this.props.type, 'cellContent'].join(' ')}
                    style={style}
            >
           </div>
        );
    }
}
