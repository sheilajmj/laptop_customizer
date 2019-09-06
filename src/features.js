import React, { Component } from 'react';
import Options from './options'
import { ReactComponent } from "*.svg";



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
        features 
        updateFeature
        state = {this.state} />
      </fieldset>
    )
  });
  return (
    {features}
  )
}
}


