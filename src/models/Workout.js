// server/models/Workout.js
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    duration: { type: Number }, // Duration in minutes
    difficulty: { type: String }, // e.g., beginner, intermediate, advanced
    category: { type: String }, // e.g., cardio, strength, flexibility
    videoURL: { type: String }, // URL to video
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Workout', workoutSchema);
