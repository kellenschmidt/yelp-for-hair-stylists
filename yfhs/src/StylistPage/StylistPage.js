import React, { Component }  from "react";
import PropTypes from 'prop-types';

import './StylistPage.css';

class StylistPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stylistName: "Placeholder name",
      stylistPhoto: null,
      stylistRating: 5
    };

  }

  render() {
    const { stylistName, stylistPhoto, stylistRating } = this.props;

    return (
      <div className="StylistPage">
        <h1 className="StylistName display-1">{ stylistName }</h1>
        <h3 className="StylistRating">Overall Rating: 
          <h5 className="display-4">{ stylistRating }</h5>
        </h3>

        <h3 className="UserRatingsTitle display-3">User Ratings</h3>
        <div>
        </div>
      </div>
    );

  }

}

export default StylistPage;
