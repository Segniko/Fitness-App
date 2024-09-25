const express = require('express');
const { getAllNutrition, addNutrition, updateNutrition, deleteNutrition } = require('../controllers/nutritionController');

const router = express.Router();

// Define routes
router.get('/', getAllNutrition);
router.post('/', addNutrition);
router.put('/:id', updateNutrition);
router.delete('/:id', deleteNutrition);

module.exports = router;
