import React from "react";
import {FaGithub, FaLinkedin, FaGitlab, FaEnvelope, FaPhone} from "react-icons/fa";
import "../styles/Footer.css"
import NewsletterForm from "./NewsLetterForm";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__column">
                <h4 className="footer__column-title">Portfolio</h4>
                <ul className="footer__list">
                    <li className="footer__list-item"><Link to="/about">About</Link></li>
                    <li className="footer__list-item"><Link to="/contact">Contact</Link></li>
                    <li className="footer__list-item"><Link to="/">Works</Link></li>
                    <li className="footer__list-item"><Link to="/">Blog</Link></li>
                </ul>
            </div>
            <div className="footer__column">
                <h4 className="footer__column-title">Connect</h4>
                <ul className="footer__list">
                    <li className="footer__list-item"><a href="https://github.com/AKV85"> <FaGithub/> </a></li>
                    <li className="footer__list-item"><a href="https://www.linkedin.com/in/andrej-kotov-09664a21b/">
                        <FaLinkedin/> </a></li>
                    <li className="footer__list-item"><a href="https://gitlab.com/AKV85"> <FaGitlab/> </a></li>
                    <li className="footer__list-item"><a href="mailto:a.kotov.laknojus@gmail.com"> <FaEnvelope/> </a>
                    </li>
                    <li className="footer__list-item"><a href="tel:+37064571501"><FaPhone/> </a></li>
                </ul>
            </div>
            <div className="footer__column">
                <NewsletterForm/>
            </div>
        </footer>
    );
}

export default Footer;
