// src/components/modules/html/WebTechnologies.jsx
import React from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio, TextField, Box } from '@mui/material';

const WebTechnologies = ({ onCheckAnswer, quizAnswer, userResponse, onChangeResponse }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
        Web Technologies
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 2 }}>
        What do a website and a car have in common? Many people use cars daily as passengers or drivers, but few understand the engine or safety systems—that’s the realm of mechanics. Websites also have a lot ‘under the hood’ that regular users don’t see. But you are a future developer, so let’s start by exploring the most in-demand web technologies.
      </Typography>
      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
        Core Web Technologies (HTML, CSS, JS)
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 2 }}>
        Websites are the foundation of the internet, and they are built on three core technologies. Using one technology doesn’t exclude the others; they are typically used together. HTML is responsible for the content, structure, and substance of a web page—think articles, photos, and videos. CSS is used for styling and positioning elements, ensuring the page’s appearance (e.g., fonts, backgrounds, or special effects). JavaScript adds functionality and user interaction, like form submissions or dynamic effects.
      </Typography>
      <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
        Quiz: Which technology is responsible for the content of a web page?
      </Typography>
      <RadioGroup value={quizAnswer} onChange={(e) => onCheckAnswer(e.target.value)} sx={{ ml: 2 }}>
        <FormControlLabel
          value="HTML"
          control={<Radio color="primary" />}
          label="HTML"
          sx={{ '& .MuiTypography-root': { color: 'text.primary' } }}
        />
        <FormControlLabel
          value="CSS"
          control={<Radio color="primary" />}
          label="CSS"
          sx={{ '& .MuiTypography-root': { color: 'text.primary' } }}
        />
        <FormControlLabel
          value="JavaScript"
          control={<Radio color="primary" />}
          label="JavaScript"
          sx={{ '& .MuiTypography-root': { color: 'text.primary' } }}
        />
      </RadioGroup>
      <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
        Good start! Let’s move on.
      </Typography>
      <Typography variant="h6" sx={{ color: 'primary.main', mt: 3, mb: 2 }}>
        Developer Tools Introduction
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 2 }}>
        Developers can peek into how websites they visit are built. Developer Tools is a built-in browser feature that provides information about a page’s source code, styles, network requests, and more. You can open Developer Tools by: Ctrl+Shift+I (Windows), Cmd+Opt+I (MacOS), or right-clicking on a webpage and selecting ‘View Page Source’ (the last option in the dropdown).
      </Typography>
      <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
        Task: Open Developer Tools in your browser and note the default tab.
      </Typography>
      <TextField
        value={userResponse}
        onChange={(e) => onChangeResponse(e.target.value)}
        variant="outlined"
        placeholder="Enter your answer..."
        sx={{ mt: 1, mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
      />
      <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
        The default tab in Developer Tools is ‘Elements,’ which shows the internal HTML structure of the document. Hovering over an element highlights it in the browser viewport. The ‘Styles’ tab displays the page’s styling settings, such as background color and margins. We will return to Developer Tools at various stages of learning. For now, you can peek ‘under the hood’ of your favorite website.
      </Typography>
    </Box>
  );
};

export default WebTechnologies;