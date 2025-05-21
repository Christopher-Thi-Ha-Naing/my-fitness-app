import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = ({ message = "Loading! Please wait a moment." }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
      }}
    >
      <CircularProgress color="primary" size={60} />
      <Typography mt={2} variant="h6" color="textSecondary">
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;