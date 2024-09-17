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
import Verification from "./components/Verification";

// Import Clerk components for authentication
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

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
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/verify" element={<Verification />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/termsofservice" element={<TermsOfService />} />
                <Route path="/contact" element={<ContactSupport />} />

                {/* Protected routes (signed-in users only) */}
                <Route
                    path="/exercise/:id"
                    element={
                        <SignedIn>
                            <ExerciseDetail />
                        </SignedIn>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <SignedIn>
                            <Profile />
                        </SignedIn>
                    }
                />
                <Route
                    path="/workouts"
                    element={
                        <SignedIn>
                            <Workouts />
                        </SignedIn>
                    }
                />
                <Route
                    path="/nutrition"
                    element={
                        <SignedIn>
                            <Nutrition />
                        </SignedIn>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <SignedIn>
                            <Settings />
                        </SignedIn>
                    }
                />

                {/* Redirect to sign-in for protected routes */}
                <Route
                    path="*"
                    element={
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    }
                />
            </Routes>

            <Footer />
        </Box>
    );
};

export default App;
