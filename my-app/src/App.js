import React from 'react';
import './App.css';
import {Link} from "react-router-dom"
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import AboutMe from "./pages/AboutMe";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Main from "./pages/Main";

export function Home() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </nav>
            <h1>My Home Page</h1>
        </div>
    );
}

export function About() {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <SocialLinks/>
            <AboutMe/>
            <Footer/>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <SocialLinks/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export function App() {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <SocialLinks/>
            <Main/>
            <Footer/>
        </div>
    );
}

