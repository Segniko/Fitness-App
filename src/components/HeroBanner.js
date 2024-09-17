import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const HeroBanner = () => (
    <Box
        sx={{
            mt: { lg: '122px', xs: '70px' },
            ml: { sm: '-95px' },
            position: 'relative',
            p: '1px',
            height: { xs: '200px', lg: '600px' }, // Adjust the height as necessary
        }}
    >
        <Typography color="#FF2625" fontWeight="600" fontSize="46px">Fitness Club</Typography>
        <Typography color="#FF2625" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="55px" mt="40px">
            Sweat. Smile. Repeat.
        </Typography>
        <Typography color="#FF2625" fontSize="32px" fontFamily="Alegreya" lineHeight="55px">
            Check out personalized exercises that fit your goals perfectly!
        </Typography>
        <Stack>
            <a href="#exercises" style={{ marginTop: '100px', textDecoration: 'none', width: '250px', textAlign: 'center', background: '#FF2625', padding: '20px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
    </Box>
);

export default HeroBanner;