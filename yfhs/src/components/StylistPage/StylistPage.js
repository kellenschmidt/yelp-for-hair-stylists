import React, { Component }  from "react";
import PropTypes from 'prop-types';

import './StylistPage.css';

class StylistPage extends Component {
  constructor(props) {
    super(props);
  }

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
        <h1 id="StylistName" className="display-1">{ stylistName }</h1>
        <h3 id="StylistRating">Overall Rating: 
          <h5 className="display-4">{ this.overall_score(stylistRatings) }</h5>
        </h3>

        <h3 id="UserRatingsTitle" className="display-3">User Ratings</h3>
        <div>
        </div>
      </div>
    );

  }

}

export default StylistPage;
