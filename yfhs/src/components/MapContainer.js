import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

    render() {
      return (
        <Map google={this.props.google} zoom={14}
            center={{
                lat: this.props.lat,
                lng: this.props.lng
            }}
            >
    
        </Map>
      );
    }
  }
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBQCra9IG3GXJkcGNiuFWWuQpCQ9ul8c5Y&')
})(MapContainer)
