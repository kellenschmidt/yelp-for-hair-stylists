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

  getStyleText = (styleNum) => {
    switch (styleNum){

      case 0:
        return "Long Straight";

      case 1:
        return "Long Curly";

      case 2:
        return "Short";

      case 3:
        return "Fade";

      case 4:
        return "Afro";

    }
  }

  getConversationText = (conversationNum) => {
    switch (conversationNum){

      case 0:
        return "Not much of a talker";

      case 1:
        return "Slightly talkative";

      case 2:
        return "Can hold a conversation";

      case 3:
        return "Pleasant to talk to";

      case 4:
        return "Extremely talkative";

    }
  }

  render() {
    const { title, description, totalScore, gender, age, style, conversation } = this.props;

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
            <Typography color="textSecondary">
              Style: {this.getStyleText(style)}
            </Typography>
            <Typography color="textSecondary">
              Conversationalist? {this.getConversationText(conversation)}
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
