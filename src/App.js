import React, { Component } from 'react';
import './App.css';
import slugify from 'slugify';
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
      const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.state.selected[feature].name}
                onChange={e => this.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });



          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
        })
      
    

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