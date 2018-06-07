import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class UserReview extends Component {
  getGenderText = (genderNum) => {
    if (genderNum === 0) {
      return "Male";
    } else if (genderNum === 1) {
      return "Female";
    } else {
      return "Other";
    }
  }

  render() {
    const { title, description, totalScore, gender, age } = this.props;

    return (
      <div>
        <Card className="mb-3">
          <CardContent>
            <span className="display-3 float-left mr-4">
              {totalScore}
            </span>
            <Typography variant="headline" component="h2">
              {title}
            </Typography>
            <Typography color="textSecondary">
              {this.getGenderText(gender)}, {age}  
            </Typography>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default UserReview;
