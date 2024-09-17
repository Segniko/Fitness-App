import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
        }
    };

    return (
        <Stack alignItems="center" justifyContent="center" p="20px">
            <Typography color="#ff2625" fontFamily="Roboto" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '24px' } }} mb="79px" textAlign="center">
                "The only bad workout is the one that didn't happen." <br /> Joe Cirulli
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" mb="72px">
                <TextField
                    height="76px"
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '55px' },
                        width: { lg: '900px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '55px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        '& .MuiInputBase-root': {
                            fontSize: { lg: '18px', xs: '16px' }
                        }
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn" sx={{
                    bgcolor: '#FF2625', // Red color for the button
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '173px', xs: '100px' },
                    height: '56px',
                    fontSize: { lg: '20px', xs: '14px' },
                    borderRadius: '55px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                        bgcolor: '#d32f2f', // Darker red on hover
                        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                    },
                    '&:focus': {
                        outline: 'none',
                        boxShadow: '0px 0px 0px 2px rgba(255, 38, 37, 0.5)',
                    }
                }} onClick={handleSearch}>
                    Search
                </Button>
            </Stack>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
