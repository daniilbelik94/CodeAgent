// src/components/modules/html/ImageTransfer.jsx
import React from 'react';
import { Typography, TextField } from '@mui/material';

const ImageTransfer = ({ userResponse, onChangeResponse, onCheckAnswer }) => {
  return (
    <>
      <Typography variant="h6">Image Transfer</Typography>
      <Typography variant="body1" paragraph>
        Learn to add images to a web page using the img tag.
      </Typography>
      <Typography variant="h6">Task: Add an image tag with a src attribute.</Typography>
      <TextField
        value={userResponse}
        onChange={(e) => onChangeResponse(e.target.value)}
        variant="outlined"
        placeholder="Enter your answer..."
        style={{ margin: '10px 0' }}
      />
    </>
  );
};

export default ImageTransfer;