import React, { Component } from 'react';
import Cart from './cart/Cart';
import CustomList from './customList/CustomList';
import './App.css';
import Cart from './cart/cart'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
    this.updateFeature = this.updateFeature.bind(this);
  };  

  updateFeature = (feature, newValue) => {
    console.log ('this is state', this.state)
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    console.log('about to set state to this:', selected[feature]);
    this.setState({
      selected: selected[feature]
      });
    console.log('This is the new state:', this.state) 
  }

    render() {
      return (
        <div className="App">
          <header>
            <h1>ELF Computing | Laptops</h1>
          </header>
          <main>
            <form className="main__form">
              <h2>Customize your laptop</h2>
              {features}
            </form>
            <Cart 
            state = {this.state} />
          </main>
        </div>

    );
  }
}


export default App;
