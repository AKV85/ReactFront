import React from "react";
import "../styles/GoldButton.css";
import {Link} from "react-router-dom";

function GoldButton({ text, to }) {
    return (
        <div className="gold-button">
            <Link to={to} className="btn">
                {text}
            </Link>
        </div>
    );
}

export default GoldButton;
