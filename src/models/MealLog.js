// server/models/MealLog.js
const mongoose = require('mongoose');

const mealLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mealDate: { type: Date, required: true },
    meals: [{
        foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Nutrition', required: true },
        quantity: { type: Number }, // Quantity in grams
        totalCalories: { type: Number }
    }],
    totalCalories: { type: Number }
});

module.exports = mongoose.model('MealLog', mealLogSchema);
