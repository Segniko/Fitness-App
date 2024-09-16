import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nutrition from "./components/Nutrition";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Workouts from "./components/Workouts";
import FAQ from "./components/FAQ";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import ContactSupport from "./components/ContactSupport";

const App = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    const toggleDashboard = () => {
        setIsDashboardOpen(!isDashboardOpen);
    };

    return (
        <Box width="100%" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar toggleDashboard={toggleDashboard} />
            <Dashboard isOpen={isDashboardOpen} toggleDashboard={toggleDashboard} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/contact" element={<ContactSupport />} />
            </Routes>
            <Footer />
        </Box>
    );
}

export default App;
