// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Box, Alert, IconButton, InputAdornment, Fade, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData);
      localStorage.setItem('token', res.data.token);
      onLogin(res.data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const handleForgotPassword = async () => {
    try {
      await axios.post('http://localhost:5000/api/forgot-password', { email: formData.email });
      setError(''); // Сбрасываем ошибку
      alert('Reset link sent (simulated). Check your email.');
    } catch (err) {
      setError('Failed to send reset link');
    }
  };

  const handleSwitchAuth = () => setAuthDialogOpen(true);

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: { xs: 1, sm: 2 },
      }}
    >
      <Fade in={true} timeout={500}>
        <Box
          sx={{
            width: { xs: '90%', sm: '400px' },
            maxWidth: '400px',
            height: 'auto',
            p: { xs: 2, sm: 4 },
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            textAlign: 'center',
            transition: 'all 0.3s ease-in-out',
            '&:hover': { boxShadow: 6 },
            '@media (max-width: 320px)': {
              width: '85%',
              p: 1,
            },
            '@media (min-width: 768px) and (max-width: 1400px)': {
              width: '350px',
              p: 3,
            },
            '@media (min-width: 1400px)': {
              width: '400px',
              p: 4,
            },
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', transition: 'color 0.3s' }}>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 2,
              '& .MuiTextField-root': { mb: 2, transition: 'all 0.3s' },
              '& .MuiButton-root': { transition: 'all 0.3s', '&:hover': { transform: 'scale(1.05)' } },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              fullWidth
              margin="normal"
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 }, maxWidth: '100%' }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              required
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 }, maxWidth: '100%' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}
            <Box sx={{ mt: 1, textAlign: 'right', width: '100%' }}>
              <Button
                variant="text"
                color="primary"
                onClick={() => setShowForgotPassword(true)}
                sx={{ textTransform: 'none', '&:hover': { color: 'primary.dark' } }}
              >
                Forgot Password?
              </Button>
            </Box>
            {showForgotPassword && (
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1, width: '100%' }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleForgotPassword}
                  sx={{ borderRadius: 1 }}
                >
                  Send Reset Link
                </Button>
                <Button
                  variant="text"
                  onClick={() => setShowForgotPassword(false)}
                  sx={{ color: 'text.secondary' }}
                >
                  Back to Login
                </Button>
              </Box>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1.5, borderRadius: 1, fontSize: '1.1rem', width: '100%' }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Fade>
      <Dialog open={authDialogOpen} onClose={() => setAuthDialogOpen(false)}>
        <DialogTitle>Switch Authentication</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to switch to Register? Your current form data will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAuthDialogOpen(false)}>Cancel</Button>
          <Button onClick={() => { setAuthDialogOpen(false); }} autoFocus>
            Switch
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Login;