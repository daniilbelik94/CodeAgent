// src/components/modules/html/Links.jsx
import React from 'react';
import { Typography, TextField } from '@mui/material';

const Links = ({ userResponse, onChangeResponse, onCheckAnswer }) => {
  return (
    <>
      <Typography variant="h6">Links</Typography>
      <Typography variant="body1" paragraph>
        Learn how to create hyperlinks to navigate between web pages.
      </Typography>
      <Typography variant="h6">Task: Create a link to google.com.</Typography>
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

export default Links;