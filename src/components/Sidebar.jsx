// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = ({ onLessonSelect, completedLessons, onToggleComplete }) => {
  const [expanded, setExpanded] = useState(false);

  const modules = [
    {
      title: 'HTML Modules',
      lessons: [
        {
          id: 'html-1',
          title: 'Module 1: HTML Basics',
          subLessons: [
            { id: 'html-1-1', title: 'Program of Module' },
            { id: 'html-1-2', title: 'Web Technologies' },
            { id: 'html-1-3', title: 'Tags and Attributes' },
            { id: 'html-1-4', title: 'Links' },
            { id: 'html-1-5', title: 'Structural Markup' },
            { id: 'html-1-6', title: 'HTML Document Skeleton' },
            { id: 'html-1-7', title: 'Page Creation Algorithm' },
            { id: 'html-1-8', title: 'Image Transfer' },
          ],
        },
        {
          id: 'html-2',
          title: 'Module 2: Introduction to CSS',
          subLessons: [
            { id: 'html-2-1', title: 'Program of Module' },
            { id: 'html-2-2', title: 'Connecting Styles' },
          ],
        },
      ],
    },
    {
      title: 'JavaScript Modules',
      lessons: [
        { id: 'js-1', title: 'Module 1: Variables and Types' },
        { id: 'js-2', title: 'Module 2: Conditionals and Loops' },
        { id: 'js-3', title: 'Module 3: Arrays and Functions' },
      ],
    },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: 250, bgcolor: 'background.default', height: '100vh', p: 2, boxShadow: 1 }}>
      {modules.map((module, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{ mb: 1, borderRadius: 1, '&:before': { display: 'none' } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ bgcolor: 'primary.light', borderRadius: 1, '&:hover': { bgcolor: 'primary.dark' } }}
          >
            <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
              {module.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            {module.lessons.map((lesson) => (
              <Box key={lesson.id} sx={{ mb: 1 }}>
                <Typography variant="subtitle2" sx={{ pl: 2, color: 'text.secondary' }}>
                  {lesson.title}
                </Typography>
                {lesson.subLessons && (
                  <ul style={{ listStyle: 'none', paddingLeft: 20 }}>
                    {lesson.subLessons.map((subLesson) => (
                      <li key={subLesson.id} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                        <Checkbox
                          checked={completedLessons.includes(subLesson.id)}
                          onChange={() => onToggleComplete(subLesson.id)}
                          color="primary"
                          sx={{ p: 0.5 }}
                        />
                        <Typography
                          onClick={() => onLessonSelect(subLesson.id)}
                          sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            color: 'primary.main',
                            '&:hover': { color: 'primary.dark' },
                          }}
                        >
                          {subLesson.title}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Sidebar;