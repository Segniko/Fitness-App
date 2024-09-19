import React, { useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const handlePictureUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can simulate a submission for the demo
        alert('Profile updated successfully!'); // Placeholder for actual submission logic
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Bio:
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell us about yourself..."
                        />
                    </label>
                    <label>
                        Profile Picture:
                        <input type="file" accept="image/*" onChange={handlePictureUpload} />
                    </label>
                    {profilePicture && (
                        <div className="profile-picture-preview">
                            <img
                                src={profilePicture}
                                alt="Profile Preview"
                                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                            />
                        </div>
                    )}
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
