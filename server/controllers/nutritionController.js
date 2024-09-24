const Nutrition = require('../models/Nutrition');

// Logic for creating a new nutrition entry
const createNutritionEntry = async (req, res) => {
    try {
        const { userId, foodItem, calories } = req.body;

        if (!userId || !foodItem || !calories) {
            return res.status(400).json({ message: "User ID, food item, and calories are required." });
        }

        const newNutritionEntry = new Nutrition({
            userId,
            foodItem,
            calories
        });

        await newNutritionEntry.save();
        res.status(201).json({ message: "Nutrition entry created successfully!", data: newNutritionEntry });
    } catch (error) {
        console.error("Error creating nutrition entry:", error);
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

// Logic for fetching all nutrition entries
const getAllNutritionEntries = async (req, res) => {
    try {
        const nutritionEntries = await Nutrition.find();
        res.status(200).json(nutritionEntries);
    } catch (error) {
        console.error("Error fetching nutrition entries:", error);
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

// Logic for fetching a single nutrition entry by ID
const getNutritionEntryById = async (req, res) => {
    const { id } = req.params;
    try {
        const entry = await Nutrition.findById(id);
        if (!entry) {
            return res.status(404).json({ message: "Nutrition entry not found" });
        }
        res.status(200).json(entry);
    } catch (error) {
        console.error("Error fetching nutrition entry:", error);
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

// Logic for updating a nutrition entry
const updateNutritionEntry = async (req, res) => {
    const { id } = req.params;
    const { foodItem, calories } = req.body;
    try {
        const updatedEntry = await Nutrition.findByIdAndUpdate(id, { foodItem, calories }, { new: true });
        if (!updatedEntry) {
            return res.status(404).json({ message: "Nutrition entry not found" });
        }
        res.status(200).json({ message: "Nutrition entry updated successfully!", data: updatedEntry });
    } catch (error) {
        console.error("Error updating nutrition entry:", error);
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

// Logic for deleting a nutrition entry
const deleteNutritionEntry = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedEntry = await Nutrition.findByIdAndDelete(id);
        if (!deletedEntry) {
            return res.status(404).json({ message: "Nutrition entry not found" });
        }
        res.status(200).json({ message: "Nutrition entry deleted successfully!" });
    } catch (error) {
        console.error("Error deleting nutrition entry:", error);
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

module.exports = {
    createNutritionEntry,
    getAllNutritionEntries,
    getNutritionEntryById,
    updateNutritionEntry,
    deleteNutritionEntry,
};
