import React, { useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { signOut } = useClerk();
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = async () => {
            try {
                await signOut(); // Log the user out
                navigate('/login'); // Redirect to login page
            } catch (error) {
                console.error('Logout failed:', error);
            }
        };

        performLogout();
    }, [signOut, navigate]);

    return <div>Logging out...</div>; // Optional: Display a loading message or spinner
};

export default Logout;
