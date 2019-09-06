import React, { Component } from 'react';
import Features from './features'

export default class mainForm extends Component{
  render() {
    return (
      <form className="main__form">
          <h2>Customize your laptop</h2>
          <Features 
          feature 
          updateFeature 
          state = {this.state} />
      </form>
      )
  }
}