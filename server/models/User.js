// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String }, // URL or path to the profile picture
    age: { type: Number },
    height: { type: Number }, // Height in cm
    weight: { type: Number }, // Weight in kg
    goals: [String], // e.g., weight loss, muscle gain
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
