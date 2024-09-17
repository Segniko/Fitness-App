import React, { useEffect } from 'react';

const TermsOfService = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="terms-page">
            <h1 className="terms-title">Terms of Service</h1>
            <p className="intro-text">Welcome to the Fitness Web App. By using our services, you agree to the following terms:</p>

            <div className="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using our services, you agree to comply with these terms. If you do not agree, you should not use our services.</p>
            </div>

            <div className="terms-section">
                <h2>2. Use of Services</h2>
                <p>You agree to use our services only for lawful purposes and in accordance with our guidelines. Misuse or abuse of the services is prohibited.</p>
            </div>

            <div className="terms-section">
                <h2>3. User Responsibilities</h2>
                <p>Users are responsible for maintaining the confidentiality of their account information and for all activities under their account.</p>
            </div>

            <div className="terms-section">
                <h2>4. Changes to Terms</h2>
                <p>We may update these terms from time to time. We will notify you of any significant changes and your continued use of the services signifies your acceptance of the updated terms.</p>
            </div>

            <div className="terms-section">
                <h2>5. Subscription and Payment</h2>
                <p>If you subscribe to any paid features, you agree to provide accurate payment information and to comply with any applicable fees and billing terms.</p>
            </div>

            <div className="terms-section">
                <h2>6. Account Termination</h2>
                <p>We reserve the right to terminate or suspend your account for violations of these terms or other policies at any time, with or without notice.</p>
            </div>

            <div className="terms-section">
                <h2>7. Intellectual Property</h2>
                <p>All content provided through our services, including text, graphics, logos, and software, is the property of the Fitness Web App or its content suppliers and is protected by intellectual property laws.</p>
            </div>

            <div className="terms-section">
                <h2>8. Liability Limitation</h2>
                <p>We are not liable for any indirect, incidental, or consequential damages resulting from the use of our services. Our total liability is limited to the amount paid by you for the services.</p>
            </div>

            <div className="terms-section">
                <h2>9. Governing Law</h2>
                <p>These terms and any disputes arising from them are governed by the laws of the jurisdiction in which we operate, without regard to conflict of law principles.</p>
            </div>

            <div className="terms-section">
                <h2>10. Privacy Policy</h2>
                <p>Your use of our services is also governed by our <a href="/privacy-policy" className="contact-link">Privacy Policy</a>, which outlines how we collect, use, and protect your personal information.</p>
            </div>

            <div className="terms-section">
                <h2>11. Changes to Services</h2>
                <p>We may modify or discontinue certain features of our services at any time, without notice. We will not be liable for any impact such changes may have on your use of the services.</p>
            </div>

            <div className="terms-section">
                <h2>12. Contact Us</h2>
                <p>If you have any questions about these terms, please contact us through our <a href="/contact" className="contact-link">Contact Support</a> page.</p>
            </div>
        </div>
    );
};

export default TermsOfService;
