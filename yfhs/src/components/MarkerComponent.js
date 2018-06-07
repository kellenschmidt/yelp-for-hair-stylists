import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { Marker } from 'google-maps-react';

class MarkerComponent extends Component {

    state = {
        open: false

    }

    onMarkerClick = (props, marker, e) => {
        console.log(props.name)
    }

    onMouseoverMarker = (props, marker, e) => {
        console.log(props.name)
    }


    render() {
    return (
            <Tooltip
                title={this.props.business.name}
            >
            <Marker
                onClick={this.onMarkerClick}
                onMouseover={this.onMouseoverMarker}
                position={{lat:this.props.business.coordinates.latitude, lng:this.props.business.coordinates.longitude}}
                name={this.props.business.name}
            />
            </Tooltip>
        )
    }
}

export default MarkerComponent;