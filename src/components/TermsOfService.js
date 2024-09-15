import React from 'react';
import './App.css'; // Import the updated CSS

const TermsOfService = () => {
    return (
        <div className="content-container">
            <div className="content">
                <h1 className="content-title">Terms of Service</h1>
                <p>Welcome to the Fitness Web App. By using our services, you agree to the following terms:</p>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using our services, you agree to comply with these terms. If you do not agree, you should not use our services.</p>
                <h2>2. Use of Services</h2>
                <p>You agree to use our services only for lawful purposes and in accordance with our guidelines. Misuse or abuse of the services is prohibited.</p>
                <h2>3. User Responsibilities</h2>
                <p>Users are responsible for maintaining the confidentiality of their account information and for all activities under their account.</p>
                <h2>4. Changes to Terms</h2>
                <p>We may update these terms from time to time. We will notify you of any significant changes and your continued use of the services signifies your acceptance of the updated terms.</p>
                <h2>5. Contact Us</h2>
                <p>If you have any questions about these terms, please contact us through our <a href="/contact">Contact Support</a> page.</p>
            </div>
        </div>
    );
};

export default TermsOfService;
