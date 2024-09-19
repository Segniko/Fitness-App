const Nutrition = require('../models/Nutrition');

// Add new nutrition entry
const addNutrition = async (req, res) => {
    try {
        const { calories, protein, carbs, fats } = req.body;
        if (!calories || !protein || !carbs || !fats) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newEntry = new Nutrition({ calories, protein, carbs, fats, user: req.user.id });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get nutrition progress for user
const getNutritionProgress = async (req, res) => {
    try {
        const progress = await Nutrition.find({ user: req.user.id });
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { addNutrition, getNutritionProgress };
