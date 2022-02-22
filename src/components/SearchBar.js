import { Paper, TextField } from '@material-ui/core';
import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
      searchTerm:'',      
  }

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    
    onFormSubmit(searchTerm);

    event.preventDefault();
  } 

  handleOnChange = (event) => {
    this.setState({
      searchTerm : event.target.value
    })
  }

  render() {
    return (
       <Paper elevation={6} style={{padding:'25px'}}>
         <form onSubmit={this.handleSubmit}>
           <TextField fullWidth label="Search..." onChange={this.handleOnChange}>

           </TextField>
         </form>
       </Paper>
    );
  }
}

export default SearchBar;
