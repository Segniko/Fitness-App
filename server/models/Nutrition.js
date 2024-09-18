// server/models/Nutrition.js
const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
    foodName: { type: String, required: true },
    calories: { type: Number },
    protein: { type: Number }, // grams
    carbs: { type: Number }, // grams
    fats: { type: Number }, // grams
    servingSize: { type: String } // e.g., 100g
});

module.exports = mongoose.model('Nutrition', nutritionSchema);
