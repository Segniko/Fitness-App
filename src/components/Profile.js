import React, { useState } from 'react';

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("Fitness enthusiast and nutrition lover.");
    const [location, setLocation] = useState("");
    const [favoriteExercise, setFavoriteExercise] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);

    const handleSave = () => {
        alert("Profile updated!");
    };

    const handleProfilePictureChange = (e) => {
        setProfilePicture(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="profile-container flex flex-col items-center justify-center h-screen">
            <div className="profile-card bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Your Profile</h1>

                {/* Profile Picture Upload */}
                <div className="mb-6 text-center">
                    <label className="block mb-3 text-lg font-semibold text-gray-700">Profile Picture:</label>
                    {profilePicture && <img src={profilePicture} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-3" />}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        className="block mx-auto text-center"
                    />
                </div>

                {/* Name */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-none rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-none rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Location */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="border-none rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Favorite Exercise */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">Favorite Exercise:</label>
                    <input
                        type="text"
                        value={favoriteExercise}
                        onChange={(e) => setFavoriteExercise(e.target.value)}
                        className="border-none rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Bio */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">Bio:</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="border-none rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    />
                </div>

                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-blue-600 transition transform hover:-translate-y-1">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Profile;
