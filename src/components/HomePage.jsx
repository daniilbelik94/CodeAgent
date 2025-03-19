// src/components/HomePage.jsx
import { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, Avatar, TextField, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper'; // Исправленный импорт
import emailjs from 'emailjs-com';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Кастомные стили для стрелок слайдера
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: #B3C5FF;
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 14px;
  }
  .swiper-pagination-bullet {
    background: #B3C5FF;
  }
`;

const HeroSection = ({ onOpenAuthDialog }) => (
  <Box
    sx={{
      minHeight: { xs: '50vh', sm: '60vh', md: '70vh' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#B3C5FF',
      position: 'relative',
      zIndex: 2,
      py: { xs: 3, sm: 4 },
      px: { xs: 2, sm: 3, md: 4 },
    }}
  >
    <Typography
      variant="h2"
      sx={{
        mb: 2,
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 1, sm: 2, md: 3, lg: 4 },
        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem', lg: '3.5rem', xl: '4rem' },
      }}
    >
      Unlock Your Potential with Learning Platform
    </Typography>
    <Typography
      variant="h5"
      sx={{
        mb: 4,
        maxWidth: { xs: '90%', sm: '800px', lg: '1000px' },
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.5rem', lg: '1.75rem' },
      }}
    >
      Master in-demand skills with our expertly designed courses. From web development to advanced programming, we provide the tools you need to succeed in the tech industry.
    </Typography>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/courses"
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        px: { xs: 3, sm: 4 },
        py: { xs: 1, sm: 1.5 },
        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
      }}
    >
      Explore Our Courses
    </Button>
  </Box>
);

const AchievementsSection = () => (
  <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, bgcolor: 'rgba(255, 255, 255, 0.1)' }} id="achievements">
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: { xs: 4, sm: 6 },
          color: '#B3C5FF',
          fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.5rem', lg: '3rem' },
        }}
      >
        What You Can Achieve
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              textAlign: 'center',
              p: 2,
              borderRadius: 3,
              height: { xs: '150px', sm: '180px', md: '200px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#B3C5FF',
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                }}
              >
                Master HTML & CSS
              </Typography>
              <Typography
                variant="body1"
                color="#A1B5FF"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
              >
                Build responsive websites in just 4 weeks.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              textAlign: 'center',
              p: 2,
              borderRadius: 3,
              height: { xs: '150px', sm: '180px', md: '200px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#B3C5FF',
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                }}
              >
                JavaScript Essentials
              </Typography>
              <Typography
                variant="body1"
                color="#A1B5FF"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
              >
                Become a confident developer in 6 weeks.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              textAlign: 'center',
              p: 2,
              borderRadius: 3,
              height: { xs: '150px', sm: '180px', md: '200px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#B3C5FF',
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                }}
              >
                React for Beginners
              </Typography>
              <Typography
                variant="body1"
                color="#A1B5FF"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
              >
                Create interactive apps in 8 weeks.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const ReviewsSection = () => (
  <Box sx={{ py: { xs: 4, sm: 6, md: 8 } }} id="reviews">
    <style>{swiperStyles}</style>
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: { xs: 4, sm: 6 },
          color: '#B3C5FF',
          fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.5rem', lg: '3rem' },
        }}
      >
        What Our Students Say
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              height: { xs: '180px', sm: '200px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2, bgcolor: '#1976d2', width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 } }}>
                  A
                </Avatar>
                <Typography
                  variant="h6"
                  color="#B3C5FF"
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}
                >
                  Anna
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#A1B5FF"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
              >
                "The courses are amazing! I learned to build websites from scratch in just a month."
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              height: { xs: '180px', sm: '200px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2, bgcolor: '#1976d2', width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 } }}>
                  B
                </Avatar>
                <Typography
                  variant="h6"
                  color="#B3C5FF"
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}
                >
                  Boris
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#A1B5FF"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
              >
                "The instructors are very supportive, and the materials are always up-to-date."
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              height: { xs: '180px', sm: '200px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2, bgcolor: '#1976d2', width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 } }}>
                  K
                </Avatar>
                <Typography
                  variant="h6"
                  color="#B3C5FF"
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}
                >
                  Ksenia
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#A1B5FF"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
              >
                "I landed a frontend developer job after completing the React course!"
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              height: { xs: '180px', sm: '200px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2, bgcolor: '#1976d2', width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 } }}>
                  M
                </Avatar>
                <Typography
                  variant="h6"
                  color="#B3C5FF"
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}
                >
                  Mark
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#A1B5FF"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
              >
                "A fantastic learning experience with practical projects that boosted my skills."
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Container>
  </Box>
);

const SocialMediaSection = () => (
  <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, bgcolor: 'rgba(255, 255, 255, 0.1)' }} id="social">
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: { xs: 3, sm: 4 },
          color: '#B3C5FF',
          fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.5rem', lg: '3rem' },
        }}
      >
        Join Our Community
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 2, md: 3 }, flexWrap: 'wrap' }}>
        <Button
          component="a"
          href="https://facebook.com"
          target="_blank"
          startIcon={<Facebook />}
          sx={{ color: '#B3C5FF', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
        >
          Facebook
        </Button>
        <Button
          component="a"
          href="https://twitter.com"
          target="_blank"
          startIcon={<Twitter />}
          sx={{ color: '#B3C5FF', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
        >
          Twitter
        </Button>
        <Button
          component="a"
          href="https://instagram.com"
          target="_blank"
          startIcon={<Instagram />}
          sx={{ color: '#B3C5FF', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
        >
          Instagram
        </Button>
        <Button
          component="a"
          href="https://linkedin.com"
          target="_blank"
          startIcon={<LinkedIn />}
          sx={{ color: '#B3C5FF', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
        >
          LinkedIn
        </Button>
      </Box>
    </Container>
  </Box>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Замените на ваш Service ID из EmailJS
        'YOUR_TEMPLATE_ID', // Замените на ваш Template ID из EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'dbelik664@gmail.com',
        },
        'YOUR_PUBLIC_KEY' // Замените на ваш Public Key из EmailJS
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
  };

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 8 } }} id="contact">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                color: '#B3C5FF',
                fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.5rem', lg: '3rem' },
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#A1B5FF',
                maxWidth: { xs: '100%', sm: '400px', lg: '500px' },
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              }}
            >
              Have questions or want to learn more about our courses? Fill out the form, and we’ll get back to you soon!
            </Typography>
          </Box>
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', sm: '500px' }, zIndex: 2 }}>
            {success && (
              <Alert severity="success" sx={{ mb: 4 }}>
                Your message has been sent successfully! We will contact you soon to discuss all details.
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 1,
                  '& .MuiInputBase-input': { color: '#000000' },
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
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 1,
                  '& .MuiInputBase-input': { color: '#000000' },
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
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 1,
                  '& .MuiInputBase-input': { color: '#000000' },
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
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                sx={{
                  mb: 4,
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 1,
                  '& .MuiInputBase-input': { color: '#000000' },
                  '& .MuiInputLabel-root': { color: '#1976d2' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#1976d2' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#1976d2' },
                    '&:hover fieldset': { borderColor: '#1976d2' },
                    '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  display: 'block',
                  mx: 'auto',
                  mt: 2,
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const HomePage = ({ onOpenAuthDialog }) => (
  <Box>
    <HeroSection onOpenAuthDialog={onOpenAuthDialog} />
    <AchievementsSection />
    <ReviewsSection />
    <SocialMediaSection />
    <ContactSection />
  </Box>
);

export default HomePage;