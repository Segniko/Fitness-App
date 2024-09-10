
import React, { useState } from 'react';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const handleSave = () => {
        alert("Settings updated!");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen font-sans bg-gray-100">
            <div className="position">
                <h1 className="text-3xl font-bold mb-4 text-center">Settings</h1>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={() => setNotifications(!notifications)}
                            className="mr-2"
                        />
                        Enable Notifications
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            className="mr-2"
                        />
                        Dark Mode

                    </label>
                </div>
                <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded w-full">
                    Save Settings
                </button>
            </div>
        </div>
    );
};

export default Settings;
