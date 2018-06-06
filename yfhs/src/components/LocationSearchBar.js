import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import TextField from '@material-ui/core/TextField';



class LocationSearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            address: '',
            latitude: null,
            longitude: null
        }
    }

    handleChange = (address) => {
        this.setState({ address })
    }

    handleSelect = (address) => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
                console.log('Success', latLng)
                this.props.onNewLocation(latLng)
          })
          .catch(error => console.error('Error', error))
        
        
    }

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div className="searchBar">
                        <TextField
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input w-100'
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { className })}>
                                        <span>{suggestion.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>


        )
    }

}
export default LocationSearchBar;