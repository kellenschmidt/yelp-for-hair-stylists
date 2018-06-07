
import React, { Component } from 'react';
import './App.css';
import MapView from './components/MapView';
import HairStylists from './components/HairStylists/HairStylists';
import CreateReview from './components/CreateReview/CreateReview';
import AddStylist from './components/AddStylist/AddStylist';
import axios from 'axios';

class App extends Component {

  state = {
    hairStylists: []
  }

  onMarkerClick = (props, marker, e) => {
    console.log(props.name)
    axios.get('http://127.0.0.1:8000/store/'+ props.id+'/', {
	params:{
		format: "json"
	}
})
    .then(response => {
	console.log(response)
        this.setState({ 
          hairStylists: response.data
          // hairStylists: [
          //   {
          //     name: "Samuel L Jackson",
          //     id: "1"
          //   },
          //   {
          //     name: "Kellen E Schmidt",
          //     id: "2"
          //   },
          //   {
          //     name: "Duong Nguyen",
          //     id: "3"
            //  }]
            })
	  })
	.catch(error => {
    console.log(error)
  })

  render() {
    return (
      <div>
        <div>
          

        </div>
        <HairStylists
          hairStylists = {this.state.hairStylists}
        /> 
        <MapView 
          onMarkerClick = {this.onMarkerClick}
        />
      </div>
    );
  }
}

export default App;
