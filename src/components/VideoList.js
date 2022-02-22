import { Grid } from '@material-ui/core';
import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList(props) {
  const filteredVideos = props.videos.map((video) => <VideoItem onVideoSelect={props.onVideoSelect} video ={video} key = {video.id}/>) 
  return (
    <Grid container spacing={5}>
      {filteredVideos}
    </Grid>
    
  );
}
