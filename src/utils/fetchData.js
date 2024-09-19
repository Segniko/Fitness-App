// Define base URL for your backend API
const API_BASE_URL = 'https://your-backend-url.com/api'; // Replace with your backend URL

// Existing RapidAPI options
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-Rapidapi-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-Rapidapi-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};

// Fetch data from RapidAPI
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

// New API call functions for your backend

// Fetch exercises from your backend
export const fetchExercisesFromBackend = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/exercises`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error;
    }
};

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// Log in a user
export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};

// Submit a workout
export const submitWorkout = async (workoutData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/workouts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(workoutData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting workout:', error);
        throw error;
    }
};

// Fetch user profile
export const fetchUserProfile = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/profile`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Example of adding token
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};
