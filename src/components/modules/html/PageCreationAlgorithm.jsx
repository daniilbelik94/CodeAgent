// src/components/modules/html/PageCreationAlgorithm.jsx
import React from 'react';
import { Typography, TextField } from '@mui/material';

const PageCreationAlgorithm = ({ userResponse, onChangeResponse, onCheckAnswer }) => {
  return (
    <>
      <Typography variant="h6">Page Creation Algorithm</Typography>
      <Typography variant="body1" paragraph>
        Understand the steps to create a web page.
      </Typography>
      <Typography variant="h6">Task: List the steps to create a web page.</Typography>
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

export default PageCreationAlgorithm;