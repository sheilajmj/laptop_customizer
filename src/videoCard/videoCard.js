import React, { Component } from 'react';
import './videoCard.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
class VideoCard extends Component {
    render(){
        const idx = Object.keys(this.props.state.selected).map((features) => {return features}).indexOf('Video Card')       
        const videoCard = this.props.state.selected['Video Card']
        const featureHash = 'VideoCard - ' + idx;

            return (
                <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">Video Card </div>
                <div className="summary__option__value">{videoCard.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(videoCard.cost)}
                </div>
                </div>
            );
    }
}

export default VideoCard