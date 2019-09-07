import React, { Component } from 'react';
import './cart.css';
import Processor from '../processor/processor'
import OperatingSystem from '../operatingSystem/operatingSystem'
import VideoCard from '../videoCard/videoCard'
import Display from '../display/display';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Cart extends Component {
    render(){
        const total = Object.keys(this.props.state.selected).reduce(
            (acc, curr) => acc + this.props.state.selected[curr].cost,
            0
          );
 
        return (

            <section className="main__summary">
                    <h2>Your cart</h2>
                    <Processor 
                    state = {this.props.state} />
                    <OperatingSystem
                    state = {this.props.state} />
                    <VideoCard
                    state = {this.props.state} />
                    <Display
                    state = {this.props.state} />
                    <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                    </div>
                </section>
        )
    }
}

export default Cart