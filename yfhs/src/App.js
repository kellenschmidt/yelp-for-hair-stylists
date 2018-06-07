
import React, { Component } from 'react';
import './App.css';
import MapView from './components/MapView';
import HairStylists from './components/HairStylists/HairStylists';
import axios from 'axios';

class App extends Component {

  state = {
    hairStylists: []
  }

  onMarkerClick(props, marker, e){
    console.log(props.name)
    axios.get('52.32.98.186:80/store/'+ props.id)
    .then(response => {

        this.setState({ 
          hairStylists: response
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

}

  reviews = [
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      overall_score: "1.8",
      style: 0,
      gender: 0,
      age: "14"
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      overall_score: "2.8",
      style: 1,
      gender: 1,
      age: "21"
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      overall_score: "3.8",
      style: 2,
      gender: 1,
      age: "40"
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      overall_score: "4.8",
      style: 3,
      gender: 0,
      age: "60"
    },
  ];

  render() {
    return (
      <div>
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
