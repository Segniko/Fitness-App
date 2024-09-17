import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for createRoot API
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react'; // Import ClerkProvider
import App from './App';

// Import your publishable key using Vite's environment variable format
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Clerk Publishable Key");
}

// Use ReactDOM.createRoot with the correct method for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ClerkProvider>
    </React.StrictMode>
);
