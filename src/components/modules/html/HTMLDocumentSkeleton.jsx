// src/components/modules/html/HTMLDocumentSkeleton.jsx
import React from 'react';
import { Typography, TextField } from '@mui/material';

const HTMLDocumentSkeleton = ({ userResponse, onChangeResponse, onCheckAnswer }) => {
  return (
    <>
      <Typography variant="h6">HTML Document Skeleton</Typography>
      <Typography variant="body1" paragraph>
        Learn the basic structure of an HTML document.
      </Typography>
      <Typography variant="h6">Task: Create a basic HTML skeleton.</Typography>
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

export default HTMLDocumentSkeleton;