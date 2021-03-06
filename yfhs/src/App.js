
import React, { Component } from 'react';
import './App.css';
import MapView from './components/MapView';
import HairStylists from './components/HairStylists/HairStylists';
import CreateReview from './components/CreateReview/CreateReview';
import AddStylist from './components/AddStylist/AddStylist';

class App extends Component {
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
        <div>
          <MapView />
          <HairStylists />
          

        </div>
        {/* <AddStylist /> */}
        {/* <CreateReview /> */}
      </div>
    );
  }
}

export default App;
