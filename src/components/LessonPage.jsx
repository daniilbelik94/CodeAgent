// src/components/LessonPage.jsx
import React, { useState, useEffect } from 'react';
import { Typography, Paper, Button, RadioGroup, FormControlLabel, Radio, TextField, Box } from '@mui/material';
import ProgramOfModule from './modules/html/ProgramOfModule.jsx';
import WebTechnologies from './modules/html/WebTechnologies.jsx';
import TagsAndAttributes from './modules/html/TagsAndAttributes.jsx';
import Links from './modules/html/Links.jsx';
import StructuralMarkup from './modules/html/StructuralMarkup.jsx';
import HTMLDocumentSkeleton from './modules/html/HTMLDocumentSkeleton.jsx';
import PageCreationAlgorithm from './modules/html/PageCreationAlgorithm.jsx';
import ImageTransfer from './modules/html/ImageTransfer.jsx';

const LessonPage = ({ lessonId }) => {
  const [userCode, setUserCode] = useState('');
  const [currentLessonId, setCurrentLessonId] = useState(lessonId);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [quizAnswer, setQuizAnswer] = useState('');
  const [userResponse, setUserResponse] = useState('');

  const lessons = {
    'html-1-1': {
      title: 'Module 1: HTML Basics - Program of Module',
      component: ProgramOfModule,
      task: '',
      expectedOutput: '',
      nextLesson: 'html-1-2',
    },
    'html-1-2': {
      title: 'Module 1: HTML Basics - Web Technologies',
      component: WebTechnologies,
      quiz: true,
      options: ['HTML', 'CSS', 'JavaScript'],
      expectedOutput: 'HTML',
      nextLesson: 'html-1-3',
    },
    'html-1-3': {
      title: 'Module 1: HTML Basics - Tags and Attributes',
      component: TagsAndAttributes,
      task: 'Create a div element with a class attribute.',
      expectedOutput: '<div class="container"></div>',
      nextLesson: 'html-1-4',
    },
    'html-1-4': {
      title: 'Module 1: HTML Basics - Links',
      component: Links,
      task: 'Create a link to google.com.',
      expectedOutput: '<a href="https://google.com">Google</a>',
      nextLesson: 'html-1-5',
    },
    'html-1-5': {
      title: 'Module 1: HTML Basics - Structural Markup',
      component: StructuralMarkup,
      task: 'Use a header tag.',
      expectedOutput: '<header>My Header</header>',
      nextLesson: 'html-1-6',
    },
    'html-1-6': {
      title: 'Module 1: HTML Basics - HTML Document Skeleton',
      component: HTMLDocumentSkeleton,
      task: 'Create a basic HTML skeleton.',
      expectedOutput: '<!DOCTYPE html><html><head><title>My Page</title></head><body></body></html>',
      nextLesson: 'html-1-7',
    },
    'html-1-7': {
      title: 'Module 1: HTML Basics - Page Creation Algorithm',
      component: PageCreationAlgorithm,
      task: 'List the steps to create a web page.',
      expectedOutput: '1. Plan 2. Code 3. Test',
      nextLesson: 'html-1-8',
    },
    'html-1-8': {
      title: 'Module 1: HTML Basics - Image Transfer',
      component: ImageTransfer,
      task: 'Add an image tag with a src attribute.',
      expectedOutput: '<img src="image.jpg" alt="Description">',
      nextLesson: null,
    },
  };

  const lesson = lessons[currentLessonId] || lessons['html-1-1'];
  const LessonComponent = lesson.component;

  const handleNext = () => {
    if (lesson.nextLesson) {
      setCurrentLessonId(lesson.nextLesson);
      setCompletedLessons((prev) => {
        const newSet = new Set(prev).add(currentLessonId);
        return newSet;
      });
    } else {
      alert('No more lessons available!');
    }
  };

  const handleCheckAnswer = () => {
    if (lesson.quiz) {
      if (quizAnswer === lesson.expectedOutput) {
        setCompletedLessons((prev) => {
          const newSet = new Set(prev).add(currentLessonId);
          return newSet;
        });
        setQuizAnswer('');
      } else {
        alert('Wrong answer! Try again.');
      }
    } else if (userResponse.trim() === lesson.expectedOutput.trim()) {
      setCompletedLessons((prev) => {
        const newSet = new Set(prev).add(currentLessonId);
        return newSet;
      });
      setUserResponse('');
    }
  };

  const onChangeResponse = (value) => setUserResponse(value);
  const onCheckQuizAnswer = (value) => setQuizAnswer(value);

  useEffect(() => {
    if (lessonId !== currentLessonId) {
      setCurrentLessonId(lessonId);
    }
  }, [lessonId]);

  return (
    <Box sx={{ ml: 25, p: 3, minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          {lesson.title}
        </Typography>
        <LessonComponent
          onCheckAnswer={lesson.quiz ? onCheckQuizAnswer : handleCheckAnswer}
          quizAnswer={quizAnswer}
          userResponse={userResponse}
          onChangeResponse={onChangeResponse}
        />
        {lesson.task && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
              Task:
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
              {lesson.task}
            </Typography>
            {lesson.quiz ? (
              <RadioGroup value={quizAnswer} onChange={(e) => onCheckQuizAnswer(e.target.value)} sx={{ ml: 2 }}>
                {lesson.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio color="primary" />}
                    label={option}
                    sx={{ '& .MuiTypography-root': { color: 'text.primary' } }}
                  />
                ))}
              </RadioGroup>
            ) : (
              <TextField
                value={userResponse}
                onChange={(e) => onChangeResponse(e.target.value)}
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                placeholder="Enter your answer..."
                sx={{ mt: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckAnswer}
              sx={{ mt: 2, py: 1, borderRadius: 2, fontSize: '1.1rem' }}
            >
              Check Answer
            </Button>
          </Box>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ mt: 3, py: 1.5, borderRadius: 2, fontSize: '1.1rem' }}
        >
          Next
        </Button>
      </Paper>
    </Box>
  );
};

export default LessonPage;