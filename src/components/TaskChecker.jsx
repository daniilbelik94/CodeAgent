// src/components/TaskChecker.jsx
import React from 'react';
import { Typography } from '@mui/material';

const TaskChecker = ({ code, expectedOutput }) => {
  const checkCode = () => {
    if (code.trim().startsWith('<')) { // Проверка HTML
      return code.trim() === expectedOutput.trim()
        ? 'Aufgabe korrekt!'
        : 'Fehler: Erwartete Ausgabe - ' + expectedOutput;
    }
    return 'Automatische Überprüfung nur für HTML verfügbar. JS wird später unterstützt.';
  };

  return <Typography variant="body2" color="textSecondary">{checkCode()}</Typography>;
};

export default TaskChecker;