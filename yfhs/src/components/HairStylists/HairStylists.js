import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';

import StylistPage from '../StylistPage/StylistPage';

class HairStylists extends Component {

  sampleReviews = [
    { overall_score: 1 },
    { overall_score: 2 },
    { overall_score: 3 },
    { overall_score: 4 },
    { overall_score: 5 }
  ];

  hairStylists = [
    {
      overall_score: 1,
      name: "Samuel L Jackson"
    },
    {
      overall_score: 2,
      name: "Kellen E Schmidt"
    },
    {
      overall_score: 3,
      name: "Duong Nguyen"
    }
  ];

  render() {
    return (
      <div id="HairStylist">
        {
          console.log(this.hairStylists)
        }
        {
          this.hairStylists.map(hairStylist => (
            <ExpansionPanel key={hairStylist.name}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <span className="h2">
                  {hairStylist.name}
                </span>
                <span className="h2 ml-auto">
                  {hairStylist.overall_score}/5
                  <StarIcon></StarIcon>
              	</span>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <StylistPage
                  stylistName={hairStylist.name}
                  stylistRatings={this.sampleReviews}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        }
        
        
      </div>
    );
  }
}

export default HairStylists;
