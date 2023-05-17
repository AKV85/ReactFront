import React, {useState} from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:81/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, message}),
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data);
                setName('');
                setEmail('');
                setMessage('');
                setErrors({});
                setSuccessMessage('Message sent successfully!');
            } else {
                setErrors(data.errors);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contact Me</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
                {errors.name && <div className="error-message">{errors.name[0]}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                {errors.email && <div className="error-message">{errors.email[0]}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                {errors.message && <div className="error-message">{errors.message[0]}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
