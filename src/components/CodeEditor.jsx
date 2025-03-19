// components/CodeEditor.js
import React from 'react';
import { TextField } from '@mui/material';

const CodeEditor = ({ value, onChange }) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      multiline
      rows={10}
      variant="outlined"
      fullWidth
      placeholder="Geben Sie Ihren Code hier ein..."
      style={{ margin: '10px 0' }}
    />
  );
};

export default CodeEditor;