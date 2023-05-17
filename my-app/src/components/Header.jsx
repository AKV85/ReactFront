import React from "react";
import logo from "../images/akvLogos.jpeg";
import "../styles/Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
