// src/components/Verification.js
import React, { useState } from 'react';
import { useClerk } from '@clerk/clerk-react';

const Verification = () => {
    const { verifyEmail } = useClerk();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await verifyEmail(email, code);
            // Redirect or show success message
            alert('Email verified successfully!');
        } catch (error) {
            alert('Error verifying email. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1 className="auth-title">Verify Email</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="auth-input"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="code">Verification Code:</label>
                        <input
                            type="text"
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                            className="auth-input"
                            placeholder="Enter your verification code"
                        />
                    </div>
                    <button type="submit" className="auth-button">Verify</button>
                </form>
            </div>
        </div>
    );
};

export default Verification;
