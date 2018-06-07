import React, { Component }  from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import './StylistPage.css';
import ReviewList from '../ReviewList/ReviewList';

class StylistPage extends Component {
  constructor(props) {
    super(props);
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

  overall_score = (userReviews) => {
    let avgScore = 0;
    for (let review of userReviews) {
      avgScore += review.overall_score;
    }
    return avgScore / userReviews.length;
  };

  render() {
    const { stylistName, stylistRatings } = this.props;

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
