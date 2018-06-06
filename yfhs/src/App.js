import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StylistPage from './StylistPage/StylistPage';

class App extends Component {
  sampleReviews = [
    { overall_score: 1 },
    { overall_score: 2 },
    { overall_score: 3 },
    { overall_score: 4 },
    { overall_score: 5 }
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
    return(
      <StylistPage stylistName="Placeholder Name" stylistRatings={ this.sampleReviews }/>
    );
  }
}

export default App;
