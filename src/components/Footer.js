import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <Box mt='80px'>
      <Stack gap='10px' alignItems='center' px='40px' pt='4px' sx={{backgroundColor:'#1976D2'}}>
        <img src={Logo} alt='logo' width='100px' height='40px'></img>
        <Typography pb='4px'>
          My Training App @ 2025
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer