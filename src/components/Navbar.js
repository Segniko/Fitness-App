import { Stack, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = ({ toggleDashboard }) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
                gap: { sm: '30px', xs: '20px' },
                mt: { sm: '0px', xs: '10px' },
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000, // Corrected 'Index' to 'zIndex'
                padding: '0 20px',
                height: '70px',
                backgroundColor: '#2196F3' // Background color for the Navbar
            }}
        >
            <Link onClick={toggleDashboard} style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={Logo}
                    alt="logo"
                    style={{ width: '120px', height: '80px', backgroundColor: 'transparent', cursor: 'pointer' }}
                />
            </Link>
            <Stack direction="row" spacing={3} alignItems="center">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: '#FFFFFF',
                            color: '#FFFFFF',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            '&:hover': {
                                backgroundColor: '#FFFFFF',
                                color: '#2196F3'
                            }
                        }}
                    >
                        Login
                    </Button>
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#FF5722',
                            color: '#FFFFFF',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            '&:hover': {
                                backgroundColor: '#E64A19'
                            }
                        }}
                    >
                        Sign Up
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
}

export default Navbar;
