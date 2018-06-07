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
            <span className="display-4">
              { stylistName }
            </span>
            <span className="display-4 ml-auto">
              { overallScore }/5
              									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
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
