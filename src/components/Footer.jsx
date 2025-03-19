// src/components/Footer.jsx
import { Box, Container, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Language as LanguageIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Footer = ({ user, onLogout, onOpenAuthDialog }) => {
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

  // Компонент для анимированных пузырьков
  const Bubbles = () => {
    const bubbleCount = 15;
    const bubbles = Array.from({ length: bubbleCount }).map((_, index) => {
      const size = Math.random() * 40 + 20;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      const sway = Math.random() * 20 - 10;

      return (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            bottom: '-60px',
            left: `${left}%`,
            width: { xs: `${size * 0.5}px`, sm: `${size * 0.7}px`, md: `${size}px` },
            height: { xs: `${size * 0.5}px`, sm: `${size * 0.7}px`, md: `${size}px` },
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            animation: `float ${duration}s infinite linear ${delay}s, sway ${duration / 2}s infinite ease-in-out ${delay}s`,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 0,
          }}
        />
      );
    });

    return (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        {bubbles}
      </Box>
    );
  };

  // Проверка пропсов
  if (!onLogout || !onOpenAuthDialog) {
    console.error('Footer: Missing required props', { onLogout, onOpenAuthDialog });
  }

  return (
    <Box sx={{ bgcolor: '#1976d2', color: '#B3C5FF', py: 4, position: 'relative' }}>
      <Bubbles />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Дублирование хедера */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 0 },
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap', justifyContent: 'center' }}>
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
        </Box>

        {/* Основной контент футера */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            pt: 2,
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Box sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}
            >
              © 2025 Learning Platform. All rights reserved.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: { xs: 2, sm: 0 } }}>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}
            >
              We accept:
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}
            >
              Visa, MasterCard, PayPal
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#B3C5FF' }}
            >
              <Facebook sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#B3C5FF' }}
            >
              <Twitter sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#B3C5FF' }}
            >
              <Instagram sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#B3C5FF' }}
            >
              <LinkedIn sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;