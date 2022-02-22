import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { VideoList, VideoDetails, SearchBar } from './components';
import { search } from './api/controller';
// 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
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
                <Grid container spacing={3} alignItems="stretch">
                  <Grid item sm ={2} xs={12}>
                      <h2>Nandini's Kitchen</h2>  
                  </Grid>
                  <Grid item sm ={10} xs={12}>
                      <SearchBar onFormSubmit={this.handleSubmit} />
                  </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="stretch">
                  <Grid item sm={8} xs={12}>
                      <VideoDetails video = {selectedVideo} />
                  </Grid>
                  <Grid item sm={4} xs={12}>
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
