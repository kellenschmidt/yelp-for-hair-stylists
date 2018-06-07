import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddStylist extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      store_id: null,
      name: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <Card className="mb-4">
          <CardContent>
            <TextField
              id="name"
              label="Hairstylist name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin='normal'
            />
            <Button variant="contained" color="primary" onClick={this.createReview}>
              Submit new hairstylist
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

}

export default AddStylist;
