// server/models/WorkoutSession.js
const mongoose = require('mongoose');

const workoutSessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    workoutId: { type: mongoose.Schema.Types.ObjectId, ref: 'Workout', required: true },
    date: { type: Date, required: true },
    duration: { type: Number }, // Duration in minutes
    notes: { type: String }, // User's notes on the session
    rating: { type: Number, min: 1, max: 5 } // User's rating of the workout
});

module.exports = mongoose.model('WorkoutSession', workoutSessionSchema);
