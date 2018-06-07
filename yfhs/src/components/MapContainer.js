import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

    render() {
      return (
        <Map google={window.google} zoom={14}
            center={{
                lat: this.props.lat,
                lng: this.props.lng
            }}
            >

            {
              this.props.markers.map(business => {
                <Marker
                  position= {{lat: business.coordinates.latitude, lng: business.coordinates.longitude}}
                />
              })
            }
    
        </Map>
      );
    }
  }
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBQCra9IG3GXJkcGNiuFWWuQpCQ9ul8c5Y&')
})(MapContainer)