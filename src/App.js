import { Box } from "@mui/material";
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login.js"; // Import the Login component
import Signup from "./components/Signup.js"; // Import the Signup component
import Nutrition from "./components/Nutrition"; // Import the Nutrition component
import Profile from "./components/Profile"; // Import the Profile component
import Settings from "./components/Settings"; // Import the Settings component

const App = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    const toggleDashboard = () => {
        setIsDashboardOpen(!isDashboardOpen);
    };

    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar toggleDashboard={toggleDashboard} />
            <Dashboard isOpen={isDashboardOpen} toggleDashboard={toggleDashboard} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="/Login" element={<Login />} /> {/* Add the Login route */}
                <Route path="/Signup" element={<Signup />} /> {/* Add the Signup route */}
                <Route path="/Nutrition" element={<Nutrition />} /> {/* Add the Nutrition route */}
                <Route path="/Profile" element={<Profile />} /> {/* Add the Profile route */}
                <Route path="/Settings" element={<Settings />} /> {/* Add the Settings route */}
            </Routes>
            <Footer />
        </Box>
    );
}

export default App;