// server/models/FitnessGoal.js
const mongoose = require('mongoose');

const fitnessGoalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    goalType: { type: String, required: true }, // e.g., weight loss, muscle gain
    targetValue: { type: Number }, // Target weight or other metric
    currentValue: { type: Number }, // Current value
    deadline: { type: Date },
    progress: { type: Number } // Percentage of goal achieved
});

module.exports = mongoose.model('FitnessGoal', fitnessGoalSchema);
