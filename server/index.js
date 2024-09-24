const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Ensure the path matches your file structure
const nutritionRoutes = require('./routes/nutritionRoutes'); // Ensure the path matches your file structure
require('dotenv').config(); // Load environment variables

// Initialize the Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup
app.use('/api/nutrition', nutritionRoutes);

// Connect to MongoDB
connectDB();

// Root route
app.get('/', (req, res) => {
    res.send(`Welcome to the Fitness Club API!`);
});

// 404 Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: `Internal Server Error: ${err.message}` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
