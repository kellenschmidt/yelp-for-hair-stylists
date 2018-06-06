import React, { Component } from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import StylistPage from '../StylistPage/StylistPage'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class HairStylist extends Component {
  constructor(props) {
    super(props);
  }

  sampleReviews = [
    { overall_score: 1 },
    { overall_score: 2 },
    { overall_score: 3 },
    { overall_score: 4 },
    { overall_score: 5 }
  ];

  render() {
    const { stylistName, overallScore } = this.props;

    return (
      <div id="HairStylist">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <span className="display-1 float-left mr-4">
              { stylistName }
            </span>
            <span className="display-3 float-right mr-4">
              { overallScore }
            </span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <StylistPage 
              stylistName={stylistName}
              stylistRatings={this.sampleReviews}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(HairStylist);
