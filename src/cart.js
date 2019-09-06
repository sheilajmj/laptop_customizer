import React, { Component } from 'react';
import CartTotal from './cartTotal'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
export default class Cart extends Component {

    render() {
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature];
    
            return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
            );
        });
  
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <CartTotal 
                state = {this.props.state}/>
            </section>
                    )
    };
}
