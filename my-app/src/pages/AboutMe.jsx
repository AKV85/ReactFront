import React from 'react';
import myFoto from "../images/about-foto.jpg"
import "../styles/About.css"
import GoldButton from "../components/GoldButton";

function AboutMe() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <img src={myFoto} alt="Andrej Kotov foto"/>
            <p>Hi, I'm Andrej Kotov, a junior PHP developer with experience in PHP, Laravel framework, HTML, CSS,
                JavaScript, MySQL, Docker, Git, and GitHub.</p>
            <p>In my previous role as a manager of aluminum boat production works, I gained valuable skills in
                leadership, project management, and team collaboration. I successfully oversaw the improvement of
                production processes. In my PHP course, I developed a web application(e-shop) using PHP and Laravel
                framework, which allowed me to further enhance my technical skills in web development, software engineering, and
                database management.</p>
            <p>My professional interests include developing innovative web applications, contributing to open-source
                projects, and exploring new technologies and tools to enhance my skills and knowledge.</p>
            <p>As a self-motivated and detail-oriented person, I am committed to delivering high-quality results and
                working collaboratively with others to achieve common goals. I also have excellent communication and
                interpersonal skills.</p>
            <p>I am committed to continuous learning and development, and I regularly participate in various courses and
                training programs to stay up-to-date with the latest trends and technologies in the field.</p>
            <p>Feel free to connect with me</p>
            <div>
                <GoldButton text="Contact Me" to="/contact"/>
            </div>
        </div>
    );
}

export default AboutMe;
