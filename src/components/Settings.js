import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useUser } from '@clerk/clerk-react'; // Import useUser to access user data

const Settings = () => {
    const { user } = useUser(); // Get user information from Clerk
    const themeColor = 'Light Blue'; // Default color for the theme

    return (
        <div className="settings-container">
            <div className="settings-card">
                <h1 className="settings-title">Settings</h1>

                {/* Account Management Section */}
                <div className="settings-section">
                    <h2>Account Management</h2>
                    <div className="settings-input">
                        <label>Email</label>
                        {user ? (
                            <input
                                type="email"
                                value={user.primaryEmailAddress}
                                readOnly
                                className="settings-input-field"
                            />
                        ) : (
                            <p>Please sign in to see your email.</p>
                        )}
                    </div>
                </div>

                {/* Theme Customization Section */}
                <div className="settings-section">
                    <h2>Theme Customization</h2>
                    <div className="settings-select">
                        <label>Theme Color</label>
                        <input
                            type="text"
                            value={themeColor}
                            readOnly
                            className="settings-input-field"
                        />
                    </div>
                </div>

                {/* Help and Support Links */}
                <div className="settings-links">
                    <h2 className="settings-links-title">Help and Support</h2>
                    <Link to="/FAQ">FAQ</Link>
                    <Link to="/Contact">Contact Support</Link>
                    <Link to="/TermsOfService">Terms of Service</Link>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Settings;
