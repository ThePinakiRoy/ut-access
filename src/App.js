import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { VideoList, VideoDetails, SearchBar } from './components';
import { search } from './api/controller';

export class App extends Component {
  state = {
    videos : [],
    selectedVideo : null    
  }

  handleSubmit = async (searchTerm) => {
    const response = await search(searchTerm)
    this.setState({videos:response, selectedVideo: response[Math.floor(Math.random() * response.length)]})
    console.log(this.state.selectedVideo)
  }

  onVideoSelect = (video) => {
    this.setState({
        selectedVideo: video
    })
  }
  componentDidMount() {
      const items = ['mutton','chicken','aloo','paneer']
      this.handleSubmit(items[Math.floor(Math.random() * items.length)])
  }
  render() {
    const { selectedVideo, videos } = this.state
    return (        
        <Grid container spacing={4}>
         
            <Grid item xs ={12}>
                <Grid container spacing={8}>
                <Grid item xs ={2}>
                <h2>Nandini's Kitchen</h2>  
                </Grid>
                <Grid item xs ={10}>
                    <SearchBar onFormSubmit={this.handleSubmit} />
                </Grid>
                </Grid>
                <Grid container spacing={10}>
                <Grid item xs={8}>
                    <VideoDetails video = {selectedVideo} />
                </Grid>
                <Grid item xs={4}>
                    <VideoList 
                        onVideoSelect = {this.onVideoSelect}
                        videos = {videos}/>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
  }
}

export default App;
