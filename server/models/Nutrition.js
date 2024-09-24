const mongoose = require('mongoose');

const NutritionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    foodItem: { type: String, required: true },
    calories: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Nutrition', NutritionSchema);
