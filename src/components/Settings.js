import React, { useState } from 'react';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [emailUpdates, setEmailUpdates] = useState(true);
    const [privacyMode, setPrivacyMode] = useState(false);
    const [volume, setVolume] = useState(50);
    const [themeColor, setThemeColor] = useState('#4f46e5'); // Default color

    const handleSave = () => {
        alert("Settings updated!");
    };

    return (
        <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
            <div className={`settings-box ${darkMode ? 'dark-mode' : ''}`}>
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
                    <div className="settings-switch">
                        <label>
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                            />
                            Dark Mode
                        </label>
                    </div>
                    <div className="settings-switch">
                        <label>
                            <input
                                type="checkbox"
                                checked={privacyMode}
                                onChange={() => setPrivacyMode(!privacyMode)}
                            />
                            Privacy Mode
                        </label>
                    </div>
                </div>

                {/* Audio Section */}
                <div className="settings-section">
                    <h2>Audio Settings</h2>
                    <div className="settings-slider-container">
                        <label>
                            Volume
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={(e) => setVolume(e.target.value)}
                                className="settings-slider"
                            />
                        </label>
                        <span>{volume}%</span>
                    </div>
                </div>

                {/* Theme Color Section */}
                <div className="settings-section">
                    <h2>Theme Color</h2>
                    <div className="settings-color-picker-container">
                        <input
                            type="color"
                            value={themeColor}
                            onChange={(e) => setThemeColor(e.target.value)}
                            className="settings-color-picker"
                        />
                        <span className="settings-color-label">Select your theme color</span>
                    </div>
                </div>

                {/* Save Button */}
                <button onClick={handleSave} className="settings-button">
                    Save Settings
                </button>
            </div>
        </div>
    );
};

export default Settings;
