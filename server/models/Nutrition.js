// server/models/Nutrition.js
const mongoose = require('mongoose');

const NutritionSchema = new mongoose.Schema({
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fats: { type: Number, required: true },
});

module.exports = mongoose.model('Nutrition', NutritionSchema);
