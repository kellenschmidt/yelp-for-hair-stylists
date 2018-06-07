import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

class CreateReview extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      comment: "",
      gender: "",
      age: "",
      style: "",
      overall_score: "",
      conversation: "",
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  createReview = () => {
    
  }

  render() {
    return (
      <div>
        <Card className="mb-3">
          <CardContent>
            <form noValidate autoComplete="off">
              <TextField
                id="title"
                label="Title"
                value={this.state.title}
                onChange={this.handleChange('title')}
                margin="normal"
              />
              <TextField
                multiline
                id="comment"
                label="Comment"
                value={this.state.comment}
                onChange={this.handleChange('comment')}
                margin="normal"
              />
              <TextField
                error={this.state.age < 0 || this.state.age > 100}
                id="age"
                label="Age"
                value={this.state.age}
                onChange={this.handleChange('age')}
                margin="normal"
              />
              <FormControl style={{ width: "100px" }}>
                <InputLabel htmlFor="gender-select">Gender</InputLabel>
                <Select
                  value={this.state.gender}
                  onChange={this.handleChange('gender')}
                  inputProps={{
                    name: 'gender',
                    id: 'gender-select',
                  }}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={0}>Male</MenuItem>
                  <MenuItem value={1}>Female</MenuItem>
                  <MenuItem value={2}>Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl style={{ width: "130px" }}>
                <InputLabel htmlFor="style-select">Style</InputLabel>
                <Select
                  value={this.state.style}
                  onChange={this.handleChange('style')}
                  inputProps={{
                    name: 'style',
                    id: 'style-select',
                  }}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={0}>Long straight</MenuItem>
                  <MenuItem value={1}>Long curly</MenuItem>
                  <MenuItem value={2}>Short</MenuItem>
                  <MenuItem value={3}>Fade</MenuItem>
                  <MenuItem value={4}>Afro</MenuItem>
                </Select>
              </FormControl>
              <TextField
                error={this.state.overall_score < 0 || this.state.overall_score > 5}
                id="overall_score"
                label="Overall Score"
                value={this.state.overall_score}
                onChange={this.handleChange('overall_score')}
                margin="normal"
              />
              <FormControl>
                <InputLabel htmlFor="haircut-cost">Cost of haircut (nearest dollar)</InputLabel>
                <Input
                  id="haircut-cost"
                  value={this.state.amount}
                  onChange={this.handleChange('cost')}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
              </FormControl>
              <FormControl style={{ width: "300px" }}>
                <InputLabel htmlFor="conversation-select">Conversation</InputLabel>
                <Select
                  value={this.state.conversation}
                  onChange={this.handleChange('conversation')}
                  inputProps={{
                    name: 'conversation',
                    id: 'conversation-select',
                  }}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={4}>5 - Better than Lebron is at basketball</MenuItem>
                  <MenuItem value={3}>4 - Aight</MenuItem>
                  <MenuItem value={2}>3 - Meh</MenuItem>
                  <MenuItem value={1}>2 - Not great</MenuItem>
                  <MenuItem value={0}>1 - JAVALE MCGEE</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" onClick={this.createReview}>
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CreateReview;
