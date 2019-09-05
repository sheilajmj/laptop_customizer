import React, { Component } from 'react';
import CustomOptions from '../customOptions/CustomOptions';


class CustomList extends Component {
    render(){
      return (
          <div>
              <CustomOptions 
              features = {this.props.features}
              state = {this.state} />
          </div>
      )   

    }
}


export default CustomList;
