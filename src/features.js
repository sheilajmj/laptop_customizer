import React, { Component } from 'react';
import Options from './options'



export default class Features extends Component {


render() {
  const features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;

  return(
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Options 
        features = {this.features}
        updateFeature = {this.props.updateFeature(this.props.feature, this.item)}
        state = {this.props.state} />
      </fieldset>
    )
  });
  return (
    {features}
  )
}
}


