import React, { Component } from 'react';
import CartSelections from '../CartSelections/CartSelections';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


class Cart extends Component {
    render() {
        return (
            <div>
                <h2>Your cart</h2>
                <CartSelections
                features = {this.props.features}
                state = {this.props.state}/>
            </div>
        )   

    }
}


export default Cart;
