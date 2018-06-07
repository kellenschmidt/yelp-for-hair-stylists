import React, { Component } from 'react';
import LocationSearchBar from './LocationSearchBar';
import MapContainer from './MapContainer';
import axios from 'axios';
import $ from 'jquery';






class MapView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            markers: []
        }
    }

    handleNewLocation = (latLng) => {

        axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {
            params: {
                latitude: '' + latLng.lat,
                longitude: '' + latLng.lng,
                term: 'salon'
            },
            headers: {
                'Authorization': 'bearer _3Y5d_7F2sHNZ6h9fptyc9-pTHFIo6mXI1WT0YsDTpFEjCcaT17_TF13oRGlaLuL10o3SNWUqlgTG3OJGrqsA1kkrCuvzgHWLw9IyWavlfDI3NiOnedfwTJaq_gXW3Yx',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        })
            .then(response => {
                console.log(response.data.businesses)
                this.setState({
                    markers: response.data.businesses,
                    latitude: latLng.lat,
                    longitude: latLng.lng
                })
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    render() {
        return (
            <div className="mapView">
                <LocationSearchBar
                    onNewLocation={this.handleNewLocation}
                />
                <MapContainer
                    lat = {this.state.latitude}
                    lng = {this.state.longitude}
                    markers = {this.state.markers}
                />
            </div>
        )
    }
}

export default MapView;

