import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/NewsletterForm.css"

function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [timer, setTimer] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:81/api/subscribers', { email });
            if (response.status === 200) {
                setEmail('');
                setErrors({});
                setSuccessMessage('Thank you for subscribing!');
                setTimer(setTimeout(() => {
                    setSuccessMessage('');
                    setTimer(null);
                }, 5000));
            } else {
                setErrors({ message: 'An error occurred. Please try again later.' });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ message: 'An error occurred. Please try again later.' });
            }
        }
    };

    useEffect(() => {
        return () => {
            if (typeof timer === 'number') {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    return (
        <form onSubmit={handleSubmit} className="newsletter-form">
            <h4 className="newsletter__column-title">Subscribe to Newsletter</h4>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email"
                       id="email"
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                       className="newsletter__input"
                />
                {errors.email && <div className="error-message">{errors.email[0]}</div>}
                {errors.message && <div className="error-message">{errors.message}</div>}
            </div>
            <button
                type="submit"
                className="newsletter__button"
            >
                Subscribe
            </button>
        </form>
    );
}

export default NewsletterForm;

