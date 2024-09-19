// userRoutes.js

const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userController');  // Ensure this path is correct

const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Define routes and associate with controller functions
router.post('/users', authenticateToken, createUser);  // POST route for creating user
router.get('/users', authenticateToken, getAllUsers);  // GET route for fetching all users
router.get('/users/:id', authenticateToken, getUserById);  // GET route for fetching user by ID
router.put('/users/:id', authenticateToken, updateUser);  // PUT route for updating user by ID
router.delete('/users/:id', authenticateToken, deleteUser);  // DELETE route for deleting user by ID

const { registerUser } = require('../controllers/authController');

// POST route for registration
router.post('/register', registerUser);

module.exports = router;
