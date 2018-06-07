import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class CreateReview extends Component {
  render() {
    const { onCreateReview } = this.props;

    return (
      <div>
        <Card className="mb-3">
          <CardContent>
            <form className="" noValidate autoComplete="off">
              <TextField
                id="name"
                label="Name"
                className=""
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CreateReview;
