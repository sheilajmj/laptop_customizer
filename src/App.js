import React, { Component } from 'react';
import Cart from './cart/Cart';
import CustomList from './customList/CustomList';
import './App.css';



class App extends Component {
  state = {
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
  };  

    render() {
      return (
        <div className="App">
          <header>
            <h1>ELF Computing | Laptops</h1>
          </header>
          <main>
            <form className="main__form">
              <h2>Customize your laptop</h2>
              <CustomList 
                features = {this.props.features}
                state = {this.state}/>
            </form>
            <section className="main__summary">
              <Cart 
                features = {this.props.features}
                state = {this.state}/>
            </section>
          </main>
        </div>
    );
  }
}

export default App;
