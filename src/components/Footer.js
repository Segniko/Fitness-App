import { Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
    return (
        <Stack className="footer" gap="40px" alignItems="center" px="40px" pt="100px">
            <img src={Logo} alt="logo" width="150px" height="100px"/>
            <Typography fontFamily="Times New Roman" fontSize="35px" variant="h5" pb="30px" alignItems="center" color="#EF4444">
                © 2024 Segni Assaye. All rights reserved.
            </Typography>
        </Stack>
    );
};

export default Footer;
