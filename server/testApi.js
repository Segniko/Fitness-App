const axios = require('axios');

// API URL
const baseURL = 'http://localhost:3000/api'; // Make sure this matches your server port

// Function to register a new user
async function registerUser() {
    try {
        const response = await axios.post(`${baseURL}/register`, {
            username: 'JohnDoe',
            email: 'john@example.com',
            password: 'password123'
        });
        console.log('User registered:', response.data);
    } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
    }
}

// Function to log in and get a JWT token
async function loginUser() {
    try {
        const response = await axios.post(`${baseURL}/login`, {
            email: 'john@example.com',
            password: 'password123'
        });
        console.log('Login successful:', response.data);
        return response.data.token; // Ensure this matches your login response structure
    } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message);
    }
}

// Function to access a protected route
async function accessProtectedRoute(token) {
    try {
        const response = await axios.get(`${baseURL}/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Protected route accessed:', response.data);
    } catch (error) {
        console.error('Error accessing protected route:', error.response ? error.response.data : error.message);
    }
}

// Run the test
(async function runTest() {
    await registerUser();
    const token = await loginUser();
    if (token) {
        await accessProtectedRoute(token);
    }
})();
