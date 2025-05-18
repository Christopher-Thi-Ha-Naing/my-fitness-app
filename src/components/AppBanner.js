import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import bannerImg from '../assets/images/banner.png';

const AppBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 300, sm: 400, md: 500 },
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: { xs: 'center', md: 'left' },
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
            fontWeight: 'bold',
          }}
        >
          Welcome to My Fitness App
        </Typography>
        <Typography
          variant="h6"
          mb={4}
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            maxWidth: { xs: '100%', md: '70%' },
            mx: { xs: 'auto', md: 0 },
          }}
        >
          Your journey to a healthier life starts here.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#exercises"
          sx={{
            display: 'block',
            mx: { xs: 'auto', md: 0 },
            px: 4,
            py: 1.5,
            fontSize: { xs: '1rem', md: '1.125rem' },
          }}
        >
          Explore Exercises
        </Button>
      </Container>
    </Box>
  )
}

export default AppBanner