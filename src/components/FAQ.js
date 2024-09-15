import React from 'react';

const FAQ = () => {
    return (
        <div className="content-container">
            <div className="content">
                <h1 className="content-title">Frequently Asked Questions</h1>
                <div className="faq-item">
                    <h2>What is the Fitness Web App?</h2>
                    <p>The Fitness Web App is a comprehensive platform for managing your fitness journey. It provides exercise videos, tracks workouts and nutrition, and helps you stay motivated with personalized recommendations.</p>
                </div>
                <div className="faq-item">
                    <h2>How do I reset my password?</h2>
                    <p>You can reset your password by going to the Settings page and selecting 'Change Password'. Follow the prompts to enter your new password.</p>
                </div>
                <div className="faq-item">
                    <h2>Can I cancel my subscription?</h2>
                    <p>Yes, you can cancel your subscription at any time through the Account Management section in the Settings page. Please note that refunds are subject to our refund policy.</p>
                </div>
                <div className="faq-item">
                    <h2>How do I contact support?</h2>
                    <p>If you need assistance, please visit our <a href="/contact">Contact Support</a> page where you can find various ways to get in touch with our support team.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
