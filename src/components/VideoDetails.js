import { Paper,Typography } from '@material-ui/core';
import React from 'react';

export default function VideoDetails(props) {
console.log(props.video)  
if(!props.video) return <div>Loading...</div>

const videoSrc = `https://www.youtube.com/embed/${props.video.id}`

  return (
    <>
      <Paper elevation ={6} style={{height:'70vh'}}>
      <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />      
      </Paper>
      <Paper elevation ={6} style={{padding:'15px'}}>
        <Typography variant="h4">{props.video.title}</Typography>
        <Typography variant="subtitle1">Nandini's Kichen</Typography>
        <Typography variant="subtitle2">{props.video.title}</Typography>
      </Paper>
    </>
  );
}
