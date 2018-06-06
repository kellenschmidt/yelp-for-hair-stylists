import React, { Component } from "react";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class HairStylist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stylistName, overallScore } = this.props;

    return (
      <div id="HairStylist">
        <Card className="mb-3">
          <CardContent>
            <span className="display-1 float-left mr-4">
              { stylistName }
            </span>
            <span className="display-3 float-right mr-4">
              { overallScore }
            </span>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default HairStylist;
