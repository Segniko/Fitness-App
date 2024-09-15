import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(true);
    const [themeColor, setThemeColor] = useState('#4f46e5'); // Default color
    const [language, setLanguage] = useState('en');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSave = () => {
        alert("Settings updated!");
    };

    return (
        <div className="settings-container">
            <div className="settings-content">
                <h1 className="settings-title">Settings</h1>

                {/* Preferences Section */}
                <div className="settings-section">
                    <h2>Preferences</h2>
                    <div className="settings-switch">
                        <label>
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={() => setNotifications(!notifications)}
                            />
                            Enable Notifications
                        </label>
                    </div>
                    <div className="settings-switch">
                        <label>
                            <input
                                type="checkbox"
                                checked={emailUpdates}
                                onChange={() => setEmailUpdates(!emailUpdates)}
                            />
                            Receive Email Updates
                        </label>
                    </div>
                </div>

                {/* Account Management Section */}
                <div className="settings-section">
                    <h2>Account Management</h2>
                    <div className="settings-input">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter new email"
                        />
                    </div>
                    <div className="settings-input">
                        <label>New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter new password"
                        />
                    </div>
                </div>

                {/* Language Preferences Section */}
                <div className="settings-section">
                    <h2>Language Preferences</h2>
                    <div className="settings-select">
                        <label>Language</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            {/* Add more languages as needed */}
                        </select>
                    </div>
                </div>

                {/* Theme Customization Section */}
                <div className="settings-section">
                    <h2>Theme Customization</h2>
                    <div className="settings-select">
                        <label>Theme</label>
                        <select
                            value={themeColor}
                            onChange={(e) => setThemeColor(e.target.value)}
                        >
                            <option value="#4f46e5">Blue</option>
                            <option value="#ef4444">Red</option>
                            <option value="#10b981">Green</option>
                            <option value="#f59e0b">Orange</option>
                            {/* Add more colors as needed */}
                        </select>
                    </div>
                </div>

                {/* Save Button */}
                <button onClick={handleSave} className="settings-button">
                    Save Settings
                </button>

                {/* Help and Support Links */}
                <div className="settings-links">
                    <h2 className="settings-links-title">Help and Support</h2>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contact">Contact Support</Link>
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Settings;
