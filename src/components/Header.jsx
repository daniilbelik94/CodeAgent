// src/components/Header.jsx
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Language as LanguageIcon } from '@mui/icons-material';

const Header = ({ user, onLogout, onOpenAuthDialog }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/'); // Если секция не найдена, переходим на главную
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: '#1976d2',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        py: { xs: 1, sm: 1.5 },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: 1, sm: 2 },
          maxWidth: '1600px', // Ограничиваем максимальную ширину
          width: '100%',
          mx: 'auto', // Центрируем содержимое
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: '#B3C5FF',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
          }}
        >
          Learning Platform
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1, md: 2 }, flexWrap: 'wrap' }}>
          <Button
            sx={{
              color: '#B3C5FF',
              textTransform: 'none',
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            }}
            onClick={() => navigate('/courses')}
          >
            Courses
          </Button>
          <Button
            sx={{
              color: '#B3C5FF',
              textTransform: 'none',
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            }}
            onClick={() => handleScrollTo('reviews')}
          >
            Reviews
          </Button>
          {user ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={onLogout}
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                px: { xs: 1.5, sm: 2 },
              }}
            >
              Logout ({user?.name || 'User'})
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={onOpenAuthDialog}
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                px: { xs: 1.5, sm: 2 },
              }}
            >
              Login
            </Button>
          )}
          <IconButton onClick={handleLanguageMenuOpen}>
            <LanguageIcon sx={{ color: '#B3C5FF', fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLanguageMenuClose}
          >
            <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
            <MenuItem onClick={handleLanguageMenuClose}>Русский</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;