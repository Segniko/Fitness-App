import React from 'react';
import { Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { useClerk, useUser } from '@clerk/clerk-react';

const Navbar = ({ toggleDashboard }) => {
    const { signOut } = useClerk();
    const { isSignedIn } = useUser();

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
                zIndex: 1000,
                padding: '0 20px',
                height: '70px',
                backgroundColor: '#1E88E5' // Slightly lighter blue to fit with the background
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
                {isSignedIn ? (
                    <Button
                        variant="outlined"
                        onClick={() => signOut()}
                        sx={{
                            borderColor: '#FFEB3B', // Yellow border color for Logout button
                            color: '#FFEB3B', // Yellow text color for Logout button
                            fontSize: '16px',
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            '&:hover': {
                                backgroundColor: '#FFEB3B', // Yellow background on hover
                                color: '#FF2625' // Blue text color on hover
                            }
                        }}
                    >
                        Logout
                    </Button>
                ) : (
                    <>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: '#FFEB3B', // Yellow border color for Login button
                                    color: '#FFEB3B', // Yellow text color for Login button
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#FFEB3B', // Yellow background on hover
                                        color: '#FF2625' // Blue text color on hover
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
                                    backgroundColor: '#FFEB3B', // Yellow background color for Sign Up button
                                    color: '#1E88E5', // Blue text color for Sign Up button
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#FBC02D' // Slightly darker yellow on hover
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </>
                )}
            </Stack>
        </Stack>
    );
};

export default Navbar;
