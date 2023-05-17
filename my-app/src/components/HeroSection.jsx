import React from "react";
import "../styles/HeroSection.css";
import GoldButton from "./GoldButton";

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Hello, I am Junior Web Developer</h1>
            <p>Start to create something new</p>
                <GoldButton text="Contact Me" to="/contact" />
        </div>
    );
}

export default HeroSection;
