// src/App.jsx
import { useState, useEffect } from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import Sidebar from './components/Sidebar.jsx';
import LessonPage from './components/LessonPage.jsx';
import AuthDialog from './components/AuthDialog.jsx';
import HomePage from './components/HomePage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [selectedLesson, setSelectedLesson] = useState('html-1-1');
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [user, setUser] = useState(null);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    if (tokenFromUrl) {
      localStorage.setItem('token', tokenFromUrl);
      window.history.replaceState({}, document.title, window.location.pathname);
      verifyToken(tokenFromUrl);
    } else {
      const token = localStorage.getItem('token');
      if (token) {
        verifyToken(token);
      }
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const res = await fetch('http://localhost:5000/api/progress', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setCompletedLessons(new Set(data.completedLessons || []));
        const userRes = await fetch('http://localhost:5000/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = await userRes.json();
        if (userRes.ok) {
          setUser(userData);
        } else {
          localStorage.removeItem('token');
        }
      } else {
        localStorage.removeItem('token');
      }
    } catch (error) {
      localStorage.removeItem('token');
    }
  };

  const loadProgress = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/progress', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setCompletedLessons(new Set(data.completedLessons || []));
      }
    } catch (error) {}
  };

  const saveProgress = async (lessons) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ completedLessons: Array.from(lessons) }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.error('Failed to save progress:', data);
      }
    } catch (error) {}
  };

  const handleToggleComplete = (lessonId) => {
    setCompletedLessons((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      saveProgress(newSet);
      return newSet;
    });
  };

  const handleLogin = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        setUser(data.user);
        loadProgress();
        setAuthDialogOpen(false);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const handleRegister = async (email, password, name) => {
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await res.json();
      if (res.ok) {
        setAuthDialogOpen(false);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCompletedLessons(new Set());
    localStorage.removeItem('token');
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google-login';
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
            width: { xs: `${size * 0.5}px`, sm: `${size * 0.7}px`, md: `${size}px` }, // Адаптивный размер пузырьков
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
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      >
        {bubbles}
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: `linear-gradient(90deg, rgba(68,61,173,1) 0%, rgba(36,36,201,1) 52%, rgba(0,212,255,1) 100%)`,
          backgroundSize: '200% 100%',
          animation: 'gradientShift 15s ease infinite',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Header
          user={user}
          onLogout={handleLogout}
          onOpenAuthDialog={() => setAuthDialogOpen(true)}
        />
        <Box sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
          {user ? (
            <Container
              maxWidth={false}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 64px)',
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1,
                px: { xs: 1, sm: 2, md: 3 }, // Адаптивные отступы
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '1200px', md: '1400px' },
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: { xs: '100%', sm: '250px', md: '300px', lg: '350px' },
                  }}
                >
                  <Sidebar
                    onLessonSelect={setSelectedLesson}
                    completedLessons={Array.from(completedLessons)}
                    onToggleComplete={handleToggleComplete}
                  />
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    padding: { xs: 1, sm: 2, md: 3 },
                  }}
                >
                  <LessonPage lessonId={selectedLesson} />
                </Box>
              </Box>
            </Container>
          ) : (
            <>
              <HomePage onOpenAuthDialog={() => setAuthDialogOpen(true)} />
              <Bubbles />
            </>
          )}
        </Box>
        <Footer
          user={user}
          onLogout={handleLogout}
          onOpenAuthDialog={() => setAuthDialogOpen(true)}
        />
        <AuthDialog
          open={authDialogOpen}
          onClose={() => setAuthDialogOpen(false)}
          onLogin={handleLogin}
          onRegister={handleRegister}
          onGoogleLogin={handleGoogleLogin}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;