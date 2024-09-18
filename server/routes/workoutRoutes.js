// server/routes/workoutRoutes.js
const express = require('express');
const { createWorkout, getAllWorkouts, getWorkoutById, updateWorkout, deleteWorkout } = require('../controllers/workoutController');

const router = express.Router();

router.post('/workouts', createWorkout);
router.get('/workouts', getAllWorkouts);
router.get('/workouts/:id', getWorkoutById);
router.put('/workouts/:id', updateWorkout);
router.delete('/workouts/:id', deleteWorkout);

module.exports = router;
