import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

export default function VideoItem(props) {
  return (
    <Grid item xs={12}>
      <Paper style = {{display: 'flex', alignItem:'center', cursor:'pointer'}} onClick= {() => props.onVideoSelect(props.video)}>
      <img height={150} width={200} style ={{marginRight: '20px'}} alt={props.video.title} src={`https://img.youtube.com/vi/${props.video.id}/hqdefault.jpg`} />
      <Typography variant="subtitle1">{props.video.title}</Typography>
      </Paper>
    </Grid>
  );
}
