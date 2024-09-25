const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const nutritionRoutes = require('./routes/nutritionRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/nutrition', nutritionRoutes);

// Connect to the database
connectDB();

// Root endpoint
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Fitness Club API!</h1>
        <p>This is the backend API for the Fitness Web App.</p>
        <h2>Available API Endpoints:</h2>
        <ul>
            <li><strong>GET /api/nutrition</strong> - Fetch all nutrition data</li>
            <li><strong>POST /api/nutrition</strong> - Add new nutrition data</li>
            <li><strong>PUT /api/nutrition/:id</strong> - Update existing nutrition data by ID</li>
            <li><strong>DELETE /api/nutrition/:id</strong> - Delete nutrition data by ID</li>
        </ul>
        <p>For further documentation, please contact the development team.</p>
    `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
