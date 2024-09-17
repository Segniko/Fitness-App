import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="faq-list">

                <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleFAQ(0)}>
                    <h2 className="faq-question">What is the Fitness Web App?</h2>
                    <p className={`faq-answer ${activeIndex === 0 ? 'show' : ''}`}>
                        The Fitness Web App is a comprehensive platform for managing your fitness journey. It provides exercise videos, tracks workouts and nutrition, and helps you stay motivated with personalized recommendations.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleFAQ(1)}>
                    <h2 className="faq-question">How do I reset my password?</h2>
                    <p className={`faq-answer ${activeIndex === 1 ? 'show' : ''}`}>
                        You can reset your password by going to the Settings page and selecting 'Change Password'. Follow the prompts to enter your new password.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                    <h2 className="faq-question">Can I cancel my subscription?</h2>
                    <p className={`faq-answer ${activeIndex === 2 ? 'show' : ''}`}>
                        Yes, you can cancel your subscription at any time through the Account Management section in the Settings page. Please note that refunds are subject to our refund policy.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleFAQ(3)}>
                    <h2 className="faq-question">How do I contact support?</h2>
                    <p className={`faq-answer ${activeIndex === 3 ? 'show' : ''}`}>
                        If you need assistance, please visit our <a href="/contact" className="contact-link">Contact Support</a> page where you can find various ways to get in touch with our support team.
                    </p>
                </div>

                {/* Additional FAQ Items */}
                <div className={`faq-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleFAQ(4)}>
                    <h2 className="faq-question">How do I update my profile information?</h2>
                    <p className={`faq-answer ${activeIndex === 4 ? 'show' : ''}`}>
                        To update your profile information, go to the 'Your Profile' section and make the desired changes. Remember to save your updates before leaving the page.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleFAQ(5)}>
                    <h2 className="faq-question">What types of workouts are available?</h2>
                    <p className={`faq-answer ${activeIndex === 5 ? 'show' : ''}`}>
                        Our app offers a variety of workouts, including strength training, cardio, yoga, and flexibility exercises. You can filter workouts based on body part or equipment.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 6 ? 'active' : ''}`} onClick={() => toggleFAQ(6)}>
                    <h2 className="faq-question">How is my nutrition data used?</h2>
                    <p className={`faq-answer ${activeIndex === 6 ? 'show' : ''}`}>
                        Your nutrition data helps us provide personalized recommendations and track your progress. This information is used to suggest improvements and maintain a balanced diet.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 7 ? 'active' : ''}`} onClick={() => toggleFAQ(7)}>
                    <h2 className="faq-question">Is my data secure?</h2>
                    <p className={`faq-answer ${activeIndex === 7 ? 'show' : ''}`}>
                        Yes, we prioritize your privacy and data security. We use industry-standard encryption and secure servers to protect your personal information.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 8 ? 'active' : ''}`} onClick={() => toggleFAQ(8)}>
                    <h2 className="faq-question">Can I access the app on multiple devices?</h2>
                    <p className={`faq-answer ${activeIndex === 8 ? 'show' : ''}`}>
                        Yes, you can access your account on multiple devices. Your data will sync across devices, so you can pick up right where you left off.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 9 ? 'active' : ''}`} onClick={() => toggleFAQ(9)}>
                    <h2 className="faq-question">How do I integrate fitness tracking devices with the app?</h2>
                    <p className={`faq-answer ${activeIndex === 9 ? 'show' : ''}`}>
                        You can integrate fitness tracking devices by going to the 'Connections' section in the Settings page. Follow the instructions to connect your device and sync your data.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 10 ? 'active' : ''}`} onClick={() => toggleFAQ(10)}>
                    <h2 className="faq-question">What should I do if I encounter a technical issue?</h2>
                    <p className={`faq-answer ${activeIndex === 10 ? 'show' : ''}`}>
                        If you encounter a technical issue, please visit our <a href="/contact" className="contact-link">Contact Support</a> page or reach out to us through the support email provided. Our team will assist you as soon as possible.
                    </p>
                </div>

                <div className={`faq-item ${activeIndex === 11 ? 'active' : ''}`} onClick={() => toggleFAQ(11)}>
                    <h2 className="faq-question">How often are new workouts added?</h2>
                    <p className={`faq-answer ${activeIndex === 11 ? 'show' : ''}`}>
                        New workouts are added regularly to keep your fitness routine fresh and engaging. Check the 'New Arrivals' section for the latest additions.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FAQ;
