// src/components/Auth/Register.jsx
import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Box, Alert, IconButton, InputAdornment, Fade } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

const Register = ({ onLogin, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', name: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleClickShowPassword = (field) => {
    if (field === 'password') setShowPassword(!showPassword);
    else setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      setSuccess(res.data.message || 'Registration successful! Please check your email to confirm.');
      localStorage.setItem('token', res.data.token);
      if (onRegisterSuccess) onRegisterSuccess(); // Открываем диалоговое окно
      setTimeout(() => onLogin(res.data.user), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      console.error('Registration error:', err.response?.data);
    }
  };

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
            Register
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
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 }, maxWidth: '100%' }}
            />
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
                      onClick={() => handleClickShowPassword('password')}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 }, maxWidth: '100%' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={() => handleClickShowPassword('confirm')}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mt: 2, width: '100%' }}>{success}</Alert>}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1.5, borderRadius: 1, fontSize: '1.1rem', width: '100%' }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Fade>
    </Container>
  );
};

export default Register;