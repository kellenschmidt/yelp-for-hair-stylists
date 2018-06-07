import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import axios from 'axios';

import StylistPage from '../StylistPage/StylistPage';

class HairStylists extends Component {

  
  sampleReviews = [
    { overall_score: 1 },
    { overall_score: 2 },
    { overall_score: 3 },
    { overall_score: 4 },
    { overall_score: 5 }
  ];


    

  state = {
    hairStylists: this.props.hairStylists,
    reviews: Array.apply(null, Array(this.props.hairStylists.length)).map(Object.prototype.valueOf,{})
  };


  handleChange = id => (event) => {
    
    //no data
    if(this.state.reviews[this.state.hairStylists.findIndex[x => x.id === id]] !== {}) {
      //http request to server using id
      //show loading
      axios.get('127.0.0.1:8000/worker/'+id,{
	params: {
		format: "json"
	}	
})
      .then(response => {
        var temp = this.state.reviews
        temp[this.state.hairStylists.findIndex[x => x.id === id]] = response
        this.setState({
          reviews: temp
        })
      })
      console.log(id)
      
    }
    //there is data
    else {
      
      //do nothing
    }
  }

  render() {
    return (
      <div id="HairStylist">
        {
          console.log(this.state.hairStylists)
        }
        {
          this.props.hairStylists.map(hairStylist => (
            <ExpansionPanel key={hairStylist.id} onChange={this.handleChange(hairStylist.id)}>
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
