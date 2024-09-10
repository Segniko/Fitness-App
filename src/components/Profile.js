
import React, { useState } from 'react';

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("Fitness enthusiast and nutrition lover.");

    const handleSave = () => {
        alert("Profile updated!");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen font-sans bg-gray-100">
                <div className="position">
                <h1 className="text-6xl font-bold mb-4 text-center" >Your Profile</h1>
                <div className="mb-4">
                    <label className="block mb-1 text-2xl">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Bio:</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="border p-2 w-full"
                        rows="4"
                    />
                </div>
                <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded w-full">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Profile;
