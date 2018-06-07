import React, { Component }  from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

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
        <h5 id="StylistName" className="display-5">Reviews for { stylistName }:</h5>
        <div>
        </div>
      </div>
    );

  }

}

export default StylistPage;
