// server/controllers/workoutController.js
const Workout = require('../models/Workout');

// Create Workout
const createWorkout = async (req, res) => {
    try {
        const workout = new Workout(req.body);
        const newWorkout = await workout.save();
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read All Workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read Workout by ID
const getWorkoutById = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (workout) {
            res.json(workout);
        } else {
            res.status(404).json({ message: 'Workout not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Workout
const updateWorkout = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (workout) {
            res.json(workout);
        } else {
            res.status(404).json({ message: 'Workout not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Workout
const deleteWorkout = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        if (workout) {
            res.json({ message: 'Workout deleted' });
        } else {
            res.status(404).json({ message: 'Workout not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createWorkout, getAllWorkouts, getWorkoutById, updateWorkout, deleteWorkout };
