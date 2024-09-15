import React from 'react';
import './App.css'; // Import the updated CSS

const PrivacyPolicy = () => {
    return (
        <div className="content-container">
            <div className="content">
                <h1 className="content-title">Privacy Policy</h1>
                <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information:</p>
                <h2>1. Information Collection</h2>
                <p>We collect information you provide directly, such as your name and email address, as well as information about your usage of our services.</p>
                <h2>2. Use of Information</h2>
                <p>Your information is used to provide and improve our services, respond to your requests, and communicate with you about updates and offers.</p>
                <h2>3. Data Protection</h2>
                <p>We implement reasonable security measures to protect your data from unauthorized access, disclosure, or destruction.</p>
                <h2>4. Third-Party Services</h2>
                <p>We do not sell or rent your personal information to third parties. We may share information with trusted partners who assist us in providing our services.</p>
                <h2>5. Changes to Privacy Policy</h2>
                <p>We may update our privacy policy from time to time. We will notify you of any significant changes and encourage you to review the policy periodically.</p>
                <h2>6. Contact Us</h2>
                <p>If you have any questions or concerns about our privacy policy, please contact us through our <a href="/contact">Contact Support</a> page.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
