import React from 'react';

const Profile = () => {
    const membershipType = "Free"; // Static membership type

    // Activity level descriptions
    const activityLevels = {
        Sedentary: "You do very little or no physical activity. Most of the day is spent sitting.",
        "Lightly active": "You engage in light exercise or sports 1-3 days a week.",
        "Moderately active": "You engage in moderate exercise or sports 3-5 days a week.",
        "Very active": "You engage in vigorous exercise or sports 6-7 days a week."
    };

    return (
        <div className="profile-container">
            <h1 className="profile-title">User Profile</h1>
            <div className="membership-info">
                <h2 className="membership-heading">Membership Type</h2>
                <div className="membership-badge">
                    <span className="membership-type">{membershipType}</span>
                </div>
                <p className="premium-features">Premium features will be available soon!</p>
            </div>
            <div className="activity-level-info">
                <h2 className="activity-heading">Activity Levels</h2>
                <div className="activity-levels">
                    {Object.entries(activityLevels).map(([level, description]) => (
                        <div className="activity-level-badge" key={level}>
                            <h3 className="activity-level">{level}</h3>
                            <p className="activity-description">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
