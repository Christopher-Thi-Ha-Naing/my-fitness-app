import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center">
                <Link to="/">
                    <img 
                        src={ Logo }
                        alt="Logo"
                        style={{ height: 40, marginRight: 10 }}
                    />
                </Link>
                <Typography variant="h6" color="inherit" component="div">
                        My Fitness App
                </Typography>
            </Box>

            <Box display="flex" gap={2}>
            <Button component={Link} to="/" color="primary" className="nav-button">
                Home
            </Button>
            <Button component={Link} to="/exercise-detail" color="primary" className="nav-button">
                Exercise Detail
            </Button>
            </Box>

        </Toolbar>
    </AppBar>
  )
}

export default Navbar