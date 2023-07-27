import React from 'react';
import { Box, Typography } from '@mui/material';

const VideoPlayer = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Video Player
      </Typography>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </Box>
  );
}

export default VideoPlayer;
