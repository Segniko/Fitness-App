import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Dashboard = ({ isOpen, toggleDashboard }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleDashboard} className="toggle-btn">
                <FaBars />
            </button>
            <h2 className="dashboard-title">Dashboard</h2>
            <ul className="dashboard-menu">
                <br/>
                <li><Link to="/" className="dashboard-link">Home</Link></li>
                <br/>
                <li><Link to="/Profile" className="dashboard-link">Your Profile</Link></li>
                <br/>
                <li><Link to="/Exercises" className="dashboard-link">Workouts</Link></li>
                <br/>
                <li><Link to="/Nutrition" className="dashboard-link">Nutrition</Link></li>
                <br/>
                <li><Link to="/Settings" className="dashboard-link">Settings</Link></li>
                <br/>
            </ul>
        </div>
    );
};

export default Dashboard;