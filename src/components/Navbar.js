import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';

const Navbar = ({ toggleDashboard }) => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
                gap: { sm: '122px', xs: '40px' },
                mt: { sm: '0px', xs: '10px' },
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
            }}
            px="20px"
        >
            <Link onClick={toggleDashboard}>
                <img
                    src={Logo}
                    alt="logo"
                    style={{ width: '145px', height: '95px', margin: '0 20px', backgroundColor: 'transparent', cursor: 'pointer' }}
                />
            </Link>
            <Stack direction="row" gap="40px" fontSize="30px" alignItems="flex-end">
                <Link to="/login" className="navbar-link">Login</Link>
                <Link to="/signup" className="navbar-link">SignUp</Link>
            </Stack>
        </Stack>
    );
}

export default Navbar;