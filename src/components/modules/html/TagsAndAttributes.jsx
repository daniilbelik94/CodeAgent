// src/components/modules/html/TagsAndAttributes.jsx
import React from 'react';
import { Typography, TextField } from '@mui/material';

const TagsAndAttributes = ({ userResponse, onChangeResponse, onCheckAnswer }) => {
  return (
    <>
      <Typography variant="h6">Tags and Attributes</Typography>
      <Typography variant="body1" paragraph>
        Learn about HTML tags and their attributes, which define the structure and behavior of web content.
      </Typography>
      <Typography variant="h6">Task: Create a div element with a class attribute.</Typography>
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

export default TagsAndAttributes;