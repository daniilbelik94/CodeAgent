// src/components/AuthDialog.jsx
import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon, Google as GoogleIcon } from '@mui/icons-material';

const AuthDialog = ({ open, onClose, onLogin, onRegister, onGoogleLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (isLogin) {
      const success = await onLogin(email, password);
      if (!success) {
        setError('Invalid email or password');
      }
    } else {
      const success = await onRegister(email, password, name);
      if (!success) {
        setError('Registration failed. Email might already be in use.');
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        {isLogin ? 'Login' : 'Sign Up'}
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {!isLogin && (
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              margin="normal"
              sx={{
                mb: 3, // Увеличиваем отступ
                '& .MuiInputBase-input': { color: '#000000' }, // Чёрный текст
                '& .MuiInputLabel-root': { color: '#1976d2' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#1976d2' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#1976d2' },
                  '&:hover fieldset': { borderColor: '#1976d2' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                },
              }}
            />
          )}
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
            sx={{
              mb: 3, // Увеличиваем отступ
              '& .MuiInputBase-input': { color: '#000000' }, // Чёрный текст
              '& .MuiInputLabel-root': { color: '#1976d2' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#1976d2' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#1976d2' },
                '&:hover fieldset': { borderColor: '#1976d2' },
                '&.Mui-focused fieldset': { borderColor: '#1976d2' },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
            sx={{
              mb: 3, // Увеличиваем отступ
              '& .MuiInputBase-input': { color: '#000000' }, // Чёрный текст
              '& .MuiInputLabel-root': { color: '#1976d2' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#1976d2' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#1976d2' },
                '&:hover fieldset': { borderColor: '#1976d2' },
                '&.Mui-focused fieldset': { borderColor: '#1976d2' },
              },
            }}
          />
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 3, py: 1.5 }}
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
          <Typography sx={{ textAlign: 'center', mb: 2 }}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <Button onClick={toggleMode} color="primary">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </Button>
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={onGoogleLogin}
            fullWidth
            sx={{ py: 1.5 }}
          >
            Sign in with Google
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;