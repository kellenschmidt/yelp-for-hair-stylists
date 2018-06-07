import React, { Component } from 'react';
import './App.css';
import StylistPage from './components/StylistPage/StylistPage';
import HairStylist from './components/HairStylist/HairStylist';
import CreateReview from './components/CreateReview/CreateReview';
import ReviewList from './components/ReviewList/ReviewList';

class App extends Component {
  hairStylists = [
    {
      overall_score: 1,
      name: "no hope"
    },
    {
      overall_score: 2,
      name: "no hope"
    },
    {
      overall_score: 3,
      name: "no hope"
    }
  ];
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
       {
          this.hairStylists.map( hairStylist => (
            <HairStylist
              overallScore={ hairStylist.overall_score }
              stylistName={ hairStylist.name }
            />
          ))
       }
       </div>
    );
  }
}

export default App;
