// src/components/modules/html/ProgramOfModule.jsx
import React from 'react';
import { Typography } from '@mui/material';

const ProgramOfModule = () => {
  return (
    <>
      <Typography variant="h6">Program of Module</Typography>
      <Typography variant="body1" paragraph>
        Welcome!
      </Typography>
      <Typography variant="body1" paragraph>
        Friend, you have started the first module of HTML + CSS. Let’s break down what we will be doing this week.
      </Typography>
      <Typography variant="h6">Goals of Module 1:</Typography>
      <ul>
        <li>Understand how a web page works</li>
        <li>Learn to use basic tags and their attributes</li>
        <li>Get familiar with the principles of semantic markup and apply them in practice</li>
        <li>Learn what structural markup is and how it relates to the structure of an HTML document</li>
        <li>Define the algorithm for creating a web page</li>
        <li>Explore image formats and learn how to transfer them from a design to a project</li>
      </ul>
      <Typography variant="h6">Key Stages Each Week:</Typography>
      <ul>
        <li>Interactive longread in LMS (you are here right now)</li>
        <li>Session with the instructor</li>
        <li>Completion of homework</li>
      </ul>
      <Typography variant="h6">How to Complete Interactive Longreads?</Typography>
      <Typography variant="body1" paragraph>
        In real life, you rarely learn theory just for the sake of it. Usually, you look for specific information to solve a problem or complete a task, right? This module is built that way! It consists of a series of scenarios with tasks, from very simple to more complex.
      </Typography>
      <Typography variant="body1" paragraph>
        Theory – materials to help you complete the given task.
      </Typography>
      <Typography variant="body1" paragraph>
        Quizzes – interactive tasks to check your understanding of key points in the provided material. Quiz results do not affect your overall success as a student. Don’t be afraid of mistakes in quizzes, as they are just one of the learning tools!
      </Typography>
      <Typography variant="body1" paragraph>
        Autochecks – practice with autoverification, i.e., solving tasks in a special programming environment.
      </Typography>
      <Typography variant="body1" paragraph>
        🚀 Let’s go!
      </Typography>
    </>
  );
};

export default ProgramOfModule;