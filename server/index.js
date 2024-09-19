const express = require('express');
const path = require('path');
const connectDB = require('./config/db'); // Ensure your MongoDB connection file is imported
const userRoutes = require('./routes/userRoutes'); // Import userRoutes

const app = express();

// Connect to MongoDB
connectDB(); // Ensure you connect to the database before starting the server

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the registration form
app.get('/register', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Register</title>
        </head>
        <body>
            <h1>Register</h1>
            <form action="/api/register" method="POST">
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </body>
        </html>
    `);
});

// Route to test error handling
app.get('/error-test', (req, res, next) => {
    // Create a test error
    const testError = new Error('This is a test error!');
    // Pass the error to the error-handling middleware
    next(testError);
});

// User routes for API (handles /api/register)
app.use('/api', userRoutes);

// Handle 404 errors for nonexistent routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error stack trace
    res.status(500).json({ message: `Internal Server Error: ${err.message}` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
