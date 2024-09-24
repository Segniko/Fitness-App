import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Dashboard = ({ isOpen, toggleDashboard }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user'); // Adjust the endpoint as necessary
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCurrentUser(data); // Assuming data contains user info
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleDashboard} className="toggle-btn">
                <FaBars />
            </button>
            <h2 className="dashboard-title">Dashboard</h2>
            {currentUser && <p>Welcome, {currentUser.name}!</p>} {/* Display user name if available */}
            <ul className="dashboard-menu">
                <br />
                <li><Link to="/" className="dashboard-link">Home</Link></li>
                <br />
                <li><Link to="/Profile" className="dashboard-link">Your Profile</Link></li>
                <br />
                <li><Link to="/Workouts" className="dashboard-link">Workouts</Link></li>
                <br />
                <li><Link to="/Nutrition" className="dashboard-link">Nutrition</Link></li>
                <br />
                <li><Link to="/Settings" className="dashboard-link">Settings</Link></li>
                <br />
            </ul>
        </div>
    );
};

export default Dashboard;
