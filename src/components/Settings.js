import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Settings = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const themeColor = 'Light Blue'; // Default blue color, user can't change it

    const handleSave = () => {
        alert("Settings updated!");
    };

    return (
        <div className="settings-container">
            <div className="settings-content">
                <h1 className="settings-title">Settings</h1>

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

                {/* Theme Customization Section */}
                <div className="settings-section">
                    <h2>Theme Customization</h2>
                    <div className="settings-select">
                        <label>Theme Color</label>
                        <input
                            type="text"
                            value={themeColor}
                            readOnly
                        />
                    </div>
                </div>

                {/* Save Button */}
                <button onClick={handleSave} className="settings-button">
                    Save Settings
                </button>

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
