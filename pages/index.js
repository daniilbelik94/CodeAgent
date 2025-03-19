// pages/index.js
import { useState } from 'react';
import { CssBaseline, Container } from '@mui/material';
import Sidebar from '../components/Sidebar';
import LessonPage from '../components/LessonPage';

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState('html-1');

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <div style={{ display: 'flex' }}>
          <Sidebar onLessonSelect={setSelectedLesson} />
          <LessonPage lessonId={selectedLesson} />
        </div>
      </Container>
    </>
  );
}