import React, { Component } from 'react';
import CartTotal from '../CartTotal/CartTotal'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CartSelections extends Component {
    constructor(props) {
        super(props)
        this.state = {
        selected: {}
        }
    };


    
    render(){
        console.log('cart Selection', this.props.state);
        const summary = Object.keys(this.props.state).map((feature, idx) => {
            Object.keys(this.props.state.selected).map((feature) => {
            console.log ('this is the feature in the map:', feature)
                        const featureHash = feature + '-' + idx;

            const selectedOption = this.props.state.selected[feature];
            console.log ('here is the state in my cart', state)
            console.log ('this is selectedOption', selectedOption)
            console.log ('this is this.props.state.selected', this.props.state.selected)
            console.log ('in the cart:', selectedOption.name)
            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature}</div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            )
        });            });

  

        return (
            <div>
                <div>{summary}</div>
                <div>
                    <CartTotal 
                    features = {this.props.features}
                    state = {this.props.state}/>
                </div>
            </div>
        )
    }   
};

export default CartSelections;