import React, { Component } from 'react';
import './App.css';
import UserReview from './components/UserReview/UserReview';

class App extends Component {
  reviews = [
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      totalScore: "3.8",
      gender: "Male",
      age: "21"
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      totalScore: "3.8",
      gender: "Male",
      age: "21"
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      totalScore: "3.8",
      gender: "Male",
      age: "21"
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      totalScore: "3.8",
      gender: "Male",
      age: "21"
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      totalScore: "3.8",
      gender: "Male",
      age: "21"
    },
  ];

  render() {
    return (
      <div>
        {
          this.reviews.map(review => (
            <UserReview
              title={review.title}
              description={review.description}
              totalScore={review.totalScore}
              gender={review.gender}
              age={review.age}
            />
          ))
        }
        
      </div>
    );
  }
}

export default App;
