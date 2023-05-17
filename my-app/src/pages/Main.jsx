import React from 'react';
import "../styles/Main.css"

function Main() {
    return (
        <div className="main">
            <h2>Main Page</h2>
            <p>This website is created with AWS S3 bucket static website hosting (for primary information and developer
                contacts). </p>
            <p>Due to this, the functionality of sending messages and subscribing to news is not
                available.</p>
            <p>The website was created using React on the frontend, Laravel API on the backend, and hosted using
                AWS.</p>
        </div>
    )
}

export default Main;
