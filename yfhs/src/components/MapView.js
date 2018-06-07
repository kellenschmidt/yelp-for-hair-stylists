import React, { Component } from 'react';
import LocationSearchBar from './LocationSearchBar';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import MarkerComponent from './MarkerComponent';

class MapView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            map: <Map google={this.props.google} zoom={13} onClick={this.onMapClicked}>
            </Map>
        }
    }

    onMarkerClick = (props, marker, e) => {
        console.log(props.name)
    }

    onMouseoverMarker = (props, marker, e) => {
        console.log(props.name)
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }


    handleNewLocation = (latLng) => {

        axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {
            params: {
                latitude: '' + latLng.lat,
                longitude: '' + latLng.lng,
                term: 'haircuts'
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
                this.setState({
                    latitude: latLng.lat,
                    longitude: latLng.lng
                })

                let temp = (
                <Map google={this.props.google} zoom={13}
                    center={{
                        lat: latLng.lat,
                        lng: latLng.lng
                    }}
                    onClick={this.onMapClicked}
                >

                <MarkerComponent 
                    business={response.data.businesses[0]}
                />
                <MarkerComponent 
                    business={response.data.businesses[1]}
                />
                <MarkerComponent 
                    business={response.data.businesses[2]}
                />
                <MarkerComponent 
                    business={response.data.businesses[3]}
                />
                <MarkerComponent 
                    business={response.data.businesses[4]}
                />
                <MarkerComponent 
                    business={response.data.businesses[5]}
                />
                <MarkerComponent 
                    business={response.data.businesses[6]}
                />
                <MarkerComponent 
                    business={response.data.businesses[7]}
                />
                <MarkerComponent 
                    business={response.data.businesses[8]}
                />
                <MarkerComponent 
                    business={response.data.businesses[9]}
                />
                
                {/* <Marker
                onClick={this.onMarkerClick}
                onMouseover={this.onMouseoverMarker}
                position={{lat:response.data.businesses[0].coordinates.latitude, lng:response.data.businesses[0].coordinates.longitude}}
                name={response.data.businesses[0].name}
                />
                <Marker
                onMouseover={this.onMouseoverMarker}
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[1].coordinates.latitude, lng:response.data.businesses[1].coordinates.longitude}}
                name={response.data.businesses[1].name}
                />
                <Marker
                onMouseover={this.onMouseoverMarker}
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[2].coordinates.latitude, lng:response.data.businesses[2].coordinates.longitude}}
                name={response.data.businesses[2].name}
                />
                <Marker
                onMouseover={this.onMouseoverMarker}
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[3].coordinates.latitude, lng:response.data.businesses[3].coordinates.longitude}}
                name={response.data.businesses[3].name}
                />
                <Marker
                onMouseover={this.onMouseoverMarker}
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[4].coordinates.latitude, lng:response.data.businesses[4].coordinates.longitude}}
                name={response.data.businesses[4].name}
                />
                <Marker
                onMouseover={this.onMouseoverMarker}
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[5].coordinates.latitude, lng:response.data.businesses[5].coordinates.longitude}}
                name={response.data.businesses[5].name}
                />
                <Marker
                onMouseover={this.onMouseoverMarker}
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[6].coordinates.latitude, lng:response.data.businesses[6].coordinates.longitude}}
                name={response.data.businesses[6].name}
                />
                <Marker
                onMouseover={this.onMouseoverMarker}
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[7].coordinates.latitude, lng:response.data.businesses[7].coordinates.longitude}}
                name={response.data.businesses[7].name}
                />
                <Marker
                onMouseover={this.onMouseoverMarker}
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[8].coordinates.latitude, lng:response.data.businesses[8].coordinates.longitude}}
                name={response.data.businesses[8].name}
                />
                <Marker
                onMouseover={this.onMouseoverMarker}
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[9].coordinates.latitude, lng:response.data.businesses[9].coordinates.longitude}}
                name={response.data.businesses[9].name}
                /> */}
                
                </Map> 
                );

                this.setState({
                    latitude: latLng.lat,
                    longitude: latLng.lng,
                    map: temp
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
                { this.state.map }
                

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBQCra9IG3GXJkcGNiuFWWuQpCQ9ul8c5Y&')
  })(MapView)

