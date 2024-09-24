const express = require('express');
const {
    createNutritionEntry,
    getAllNutritionEntries,
} = require('../controllers/nutritionController');

const router = express.Router();

// Route for fetching all nutrition data
router.get('/', getAllNutritionEntries);

// Route for creating a new nutrition entry
router.post('/', createNutritionEntry); // POST route for creating nutrition entry

module.exports = router;
