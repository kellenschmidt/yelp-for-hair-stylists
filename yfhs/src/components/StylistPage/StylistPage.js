import React, { Component }  from "react";

import './StylistPage.css';
import ReviewList from '../ReviewList/ReviewList';

class StylistPage extends Component {

  state= {
    reviews: []
  }


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
          reviews={ this.props.reviews }

        />
      </div>
    );

  }

}

export default StylistPage;
