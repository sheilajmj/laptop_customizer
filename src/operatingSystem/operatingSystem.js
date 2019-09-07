import React, { Component } from 'react';
import './operatingSystem.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
class OperatingSystem extends Component {
    render(){
        const idx = Object.keys(this.props.state.selected).map((features) => {return features}).indexOf('Operating System')       
        const operatingSystem = this.props.state.selected['Operating System']
        const featureHash = 'OperatingSystem - ' + idx;


            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">Operating System</div>
                    <div className="summary__option__value">{operatingSystem.name}</div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(operatingSystem.cost)}
                    </div>
                </div>
            );
    }
}

export default OperatingSystem;