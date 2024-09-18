// server/models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    feedbackType: { type: String, required: true }, // e.g., workout, app
    message: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 }, // Rating of the feedback
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
