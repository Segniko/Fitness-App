const Exercise = require('../models/Exercise');

const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createExercise = async (req, res) => {
    const { name, bodyPart, equipment, gifUrl, difficulty } = req.body;

    try {
        const newExercise = new Exercise({
            name,
            bodyPart,
            equipment,
            gifUrl,
            difficulty,
        });

        const savedExercise = await newExercise.save();
        res.status(201).json(savedExercise);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add exercise' });
    }
};

module.exports = { getExercises, createExercise };
