import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CustomOptions extends Component {
  constructor(props) {
    super(props)
    const selected = {}
    Object.keys(this.props.features).map((feature, idx) => {
    selected[feature] = this.props.features[feature][0].name
    });

    this.state ={
    selected: selected
    }
}
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    console.log('setting state', selected[feature]);
    this.setState({
      selected: selected
    });
    console.log('This is the new state:', this.state)
  }


  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      
      const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
    // console.log ('this is the selected and then the feature:', this.state.selected, feature);
    // console.log ('this is item:', item)
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature]}
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
  });
  return (
    <div>
      {features}
    </div>
  )

};
}

export default CustomOptions;