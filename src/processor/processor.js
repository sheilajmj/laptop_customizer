import React, { Component } from 'react';
import './processor.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
class Processor extends Component {
    render(){
        const idx = Object.keys(this.props.state.selected).map((features) => {return features}).indexOf('Processor')
        const processor = this.props.state.selected.Processor
        const featureHash = 'Processor - ' + idx;    

        return (
            <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">Processor</div>
            <div className="summary__option__value">{processor.name}</div>
            <div className="summary__option__cost">
                {USCurrencyFormat.format(processor.cost)}
            </div>
            </div>
        );
    }
}

export default Processor