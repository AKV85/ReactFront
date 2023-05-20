import React from 'react';
import "../styles/Main.css"

function Main() {
    return (
        <div className="main">
            <h2>Main Page</h2>
            <p>On the homepage of my project, I used a Laravel API back-end deployed on the Laravel Forge platform (forge.laravel.com). To accomplish this, I acquired a domain from Hostinger (hostinger.com) and configured DNS records for my API.</p>

            <p>The front-end of my project is developed using React. For hosting the front-end, I utilized the Netlify platform (app.netlify.com) and obtained a domain through their platform.</p>

            <p>Thus, I achieved by the perfect combination of a powerful Laravel API back-end deployed on Forge and accessible via a domain registered with Hostinger, along with a modern and responsive React front-end hosted on Netlify and accessible via a domain acquired on their platform.</p>

            <p>Users can enjoy the reliability and speed of our Laravel API back-end provided by the Forge platform, as well as the instant loading and responsiveness of our React front-end facilitated by Netlify.</p>
        </div>
    )
}

export default Main;
