import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StylistPage from './components/StylistPage/StylistPage';
import HairStylist from './components/HairStylist/HairStylist';

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


  render() {
    /*
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    */

    /*
    return(
      <StylistPage stylistName="Placeholder Name" stylistRatings={ this.sampleReviews }/>
    );
    */

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
