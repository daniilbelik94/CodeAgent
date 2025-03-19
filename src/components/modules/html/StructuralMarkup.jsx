// src/components/modules/html/StructuralMarkup.jsx
import React from 'react';
import { Typography, TextField } from '@mui/material';

const StructuralMarkup = ({ userResponse, onChangeResponse, onCheckAnswer }) => {
  return (
    <>
      <Typography variant="h6">Structural Markup</Typography>
      <Typography variant="body1" paragraph>
        Explore semantic HTML to improve accessibility and structure.
      </Typography>
      <Typography variant="h6">Task: Use a header tag.</Typography>
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

export default StructuralMarkup;