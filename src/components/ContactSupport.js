import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSupport = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'your_service_id',
            'your_template_id',
            formData,
            'your_public_key'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Failed to send the message. Please try again later.');
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-container">
            <h1>Contact Support</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactSupport;
