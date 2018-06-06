import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import LocationSearchBar from './LocationSearchBar';
import axios from 'axios';



class MapView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            latitude: null,
            longitude: null
        }
    }

    handleNewLocation = (latLng) => {
        this.setState({latitude:latLng.lat, longitude:latLng.lng})

        axios.get('')

    }

    render() {
        return (
           <div className="mapView">
                <LocationSearchBar 
                    onNewLocation = {this.handleNewLocation}
                />
                <Map 
                    google={this.props.google} 
                    zoom={14} 
                    center={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                />


           </div> 
        )
    }

}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyDuSFn8w1Z_lyKoahRq_e2NDl_te_xzZMI')
  })(MapView)