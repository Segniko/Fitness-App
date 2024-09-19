const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const nutritionRoutes = require('./routes/NutritionRoutes'); // Import nutrition routes

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/nutrition', nutritionRoutes);

// Connect to MongoDB
connectDB();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
    res.send(`Welcome to the Fitness App API!`);
});

// User routes for registration
app.use('/api', userRoutes);

// Nutrition API routes
app.use('/api/nutrition', nutritionRoutes);

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