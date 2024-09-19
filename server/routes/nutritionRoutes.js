const express = require('express');
const router = express.Router();
const Nutrition = require('../models/Nutrition');

// POST request to add new nutrition data
router.post('/', async (req, res) => {
    try {
        const nutritionData = req.body;
        const newNutrition = new Nutrition(nutritionData);
        await newNutrition.save();
        res.status(201).json(newNutrition);
    } catch (error) {
        console.error("Error saving nutrition data:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// GET request to fetch all nutrition data
router.get('/', async (req, res) => {
    try {
        const nutrition = await Nutrition.find();
        res.json(nutrition);
    } catch (error) {
        console.error("Error fetching nutrition data:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
