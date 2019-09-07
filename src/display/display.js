import React, { Component } from 'react';
import './display.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
class Display extends Component {
    render(){
        const idx = Object.keys(this.props.state.selected).map((features) => {return features}).indexOf('Display')       
        const display = this.props.state.selected['Display']
        const featureHash = 'Display - ' + idx;

            return (
                <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">Display</div>
                <div className="summary__option__value">{display.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(display.cost)}
                </div>
                </div>
            );
    }
};

export default Display;