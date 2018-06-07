import React, { Component } from 'react';
import UserReview from '../UserReview/UserReview';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

import './ReviewList.css';

class ReviewList extends Component {
  state = {
    gender: -1,
    style: -1,
    minScore: 0,
    showFilters: false,
  };

  handleChangeGender = event => {
    this.setState({ gender: event.target.value });
  };

  handleChangeStyle = event => {
    this.setState({ style: event.target.value });
  };

  handleChangeMinScore = (event, value) => {
    this.setState({ minScore: value });
  };

  toggleFilter = () => {
    this.setState((prevState, props) => ({
      showFilters: !prevState.showFilters,
    }))
  }

  getObjectsByKey = (array, key, value) => {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value || value === -1) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

  getObjectsGtKey = (array, key, value) => {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] >= value) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

  filterReviews = () => {
    var filteredObjects = this.getObjectsByKey(this.props.reviews, "gender", this.state.gender);
    filteredObjects = this.getObjectsByKey(filteredObjects, "style", this.state.style);
    filteredObjects = this.getObjectsGtKey(filteredObjects, "overall_score", this.state.minScore);
    return filteredObjects;
  }

  render() {
    const { reviews } = this.props;

    return (
      <div>
        <IconButton onClick={this.toggleFilter}>
          <FilterListIcon/>
        </IconButton>
        {
          this.state.showFilters ? (
            <form>
              <FormControl className="select-width">
                <InputLabel htmlFor="gender-select">Gender</InputLabel>
                <Select
                  value={this.state.gender}
                  onChange={this.handleChangeGender}
                  inputProps={{
                    name: 'gender',
                    id: 'gender-select',
                  }}
                >
                  <MenuItem value={-1}>
                    <em>Any</em>
                  </MenuItem>
                  <MenuItem value={0}>Male</MenuItem>
                  <MenuItem value={1}>Female</MenuItem>
                  <MenuItem value={2}>Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="select-width">
                <InputLabel htmlFor="style-select">Style</InputLabel>
                <Select
                  value={this.state.style}
                  onChange={this.handleChangeStyle}
                  inputProps={{
                    name: 'style',
                    id: 'style-select',
                  }}
                >
                  <MenuItem value={-1}>
                    <em>Any</em>
                  </MenuItem>
                  <MenuItem value={0}>Long straight</MenuItem>
                  <MenuItem value={1}>Long curly</MenuItem>
                  <MenuItem value={2}>Short</MenuItem>
                  <MenuItem value={3}>Fade</MenuItem>
                  <MenuItem value={4}>Afro</MenuItem>
                </Select>
              </FormControl>
              <Typography id="label">{this.state.minScore}</Typography>
              <Slider value={this.state.minScore} min={0} max={5} step={0.1} oaria-labelledby="label" onChange={this.handleChangeMinScore} />
            </form>
          )
          : "" 
        }
        {
          this.filterReviews().map(review => (
            <UserReview
              title={review.title}
              description={review.description}
              totalScore={review.totalScore}
              gender={review.gender}
              age={review.age}
              key={review.description}
            />
          ))
        }
      </div>
    );
  }
}

export default ReviewList;
