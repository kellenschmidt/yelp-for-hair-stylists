import React, { Component } from 'react';
import LocationSearchBar from './LocationSearchBar';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

class MapView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            map: <Map google={this.props.google} zoom={13}/>
        }
    }

    // componentDidMount() {
    //     axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {
    //         params: {
    //             latitude: '' + latLng.lat,
    //             longitude: '' + latLng.lng,
    //             term: 'salon'
    //         },
    //         headers: {
    //             'Authorization': 'bearer _3Y5d_7F2sHNZ6h9fptyc9-pTHFIo6mXI1WT0YsDTpFEjCcaT17_TF13oRGlaLuL10o3SNWUqlgTG3OJGrqsA1kkrCuvzgHWLw9IyWavlfDI3NiOnedfwTJaq_gXW3Yx',
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Headers': '*',
    //             'Access-Control-Allow-Origin': 'http://localhost:3000'
    //         }
    //     })
    //         .then(response => {
    //             console.log(response.data.businesses)

    //             let temp =  <Map google={this.props.google} zoom={3}
    //                 center={{
    //                     lat: this.props.lat,
    //                     lng: this.props.lng
    //                 }}
    //             >
                
    //             { response.data.businesses.map(business => {
    //                 <Marker
    //                     position={{lat: business.coordinates.latitude, lng: business.coordinates.longitude}}
    //                 />
    //             })
    //             }   
                    
    //             </Map>

    //             this.setState({
    //                 latitude: latLng.lat,
    //                 longitude: latLng.lng
    //             })
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }

    // createMarkers = (businesses) => {
    //     var newArray = [];
    //     console.log(businesses);
    //     businesses.forEach((value, i) => (
    //         <Marker
    //             position={{lat:businesses[i].coordinates.latitude, lng:businesses[i].coordinates.longitude}}
    //         />
    //     ));
    //     return newArray;
    // }

    

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
                console.log(response.data.businesses)
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
                >

                {/* {
                    this.createMarkers(response.data.businesses)
                } */}

                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[0].coordinates.latitude, lng:response.data.businesses[0].coordinates.longitude}}
                name={response.data.businesses[0].name}
                id={response.data.businesses[0].id}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[1].coordinates.latitude, lng:response.data.businesses[1].coordinates.longitude}}
                name={response.data.businesses[1].name}
                id={response.data.businesses[1].id}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[2].coordinates.latitude, lng:response.data.businesses[2].coordinates.longitude}}
                name={response.data.businesses[2].name}
                id={response.data.businesses[2].id}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[3].coordinates.latitude, lng:response.data.businesses[3].coordinates.longitude}}
                name={response.data.businesses[3].name}
                id={response.data.businesses[3].id}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[4].coordinates.latitude, lng:response.data.businesses[4].coordinates.longitude}}
                name={response.data.businesses[4].name}
                id={response.data.businesses[4].id}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[5].coordinates.latitude, lng:response.data.businesses[5].coordinates.longitude}}
                name={response.data.businesses[5].name}
                id={response.data.businesses[5].id}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[6].coordinates.latitude, lng:response.data.businesses[6].coordinates.longitude}}
                name={response.data.businesses[6].name}
                id={response.data.businesses[6].id}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[7].coordinates.latitude, lng:response.data.businesses[7].coordinates.longitude}}
                name={response.data.businesses[7].name}
                id={response.data.businesses[7].id}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[8].coordinates.latitude, lng:response.data.businesses[8].coordinates.longitude}}
                name={response.data.businesses[8].name}
                id={response.data.businesses[8].id}
                />
                <Marker
                onClick={this.onMarkerClick}
                position={{lat:response.data.businesses[9].coordinates.latitude, lng:response.data.businesses[9].coordinates.longitude}}
                name={response.data.businesses[9].name}
                id={response.data.businesses[9].id}
                />
                
                {/* { response.data.businesses.map(business => {
                    <Marker
                        position={{lat: business.coordinates.latitude, lng: business.coordinates.longitude}}
                    />
                })
                } */}
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

