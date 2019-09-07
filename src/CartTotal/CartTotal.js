import React, { Component } from 'react';



const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CartTotal extends Component {
    constructor(props) {
        super(props)
        this.state ={
        selected: {}
        }
    }
    
    render(){
        const total = Object.keys(this.props.state.selected).reduce(
            (acc, curr) => acc + this.props.state.selected[curr].cost,
            0
        );
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
                </div>
          </div>
        )

    }

}    

export default CartTotal;