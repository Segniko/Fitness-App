import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalScrollBar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant="h3" mb={5}>Exercise that target the same muscle group </Typography>
      <Stack direction="row" style={{ p: '2', position: 'relative'}}></Stack>
      {targetMuscleExercises.length ? <HorizontalScrollBar  data={targetMuscleExercises} /> : <Loader />}

      <Typography variant="h3" mt={10} mb={5}>Exercise that target the same equipment </Typography>
      <Stack direction="row" style={{ p: '2', position: 'relative'}}></Stack>
      {equipmentExercises.length ? <HorizontalScrollBar  data={equipmentExercises} /> : <Loader />}
      </Box>
  )
}

export default SimilarExercises