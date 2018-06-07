import React, { Component }  from "react";

import './StylistPage.css';
import ReviewList from '../ReviewList/ReviewList';

class StylistPage extends Component {

  reviews = [
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      overall_score: "1.8",
      style: 0,
      gender: 0,
      age: "14",
      conversation: 0
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      overall_score: "2.8",
      style: 1,
      gender: 1,
      age: "21",
      conversation: 1
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      overall_score: "3.8",
      style: 2,
      gender: 1,
      age: "40",
      conversation: 2
    },
    {
      title: "Super Great Haircut",
      description: "Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description Review Description",
      overall_score: "4.8",
      style: 3,
      gender: 0,
      age: "60",
      conversation: 3
    },
  ];

  overall_score = (userReviews) => {
    let avgScore = 0;
    for (let review of userReviews) {
      avgScore += review.overall_score;
    }
    return avgScore / userReviews.length;
  };

  render() {
    const { stylistName } = this.props;

    return (
      <div id="StylistPage">
        <h5 id="StylistName" className="display-5">Reviews for { stylistName }:</h5>
        <ReviewList
          reviews={ this.reviews }
        />
      </div>
    );

  }

}

export default StylistPage;
