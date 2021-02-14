import React from "react";
import GitHubLogo from "../assets/github.svg"
import "../stylesheets/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/MorganWilliamson/dice-roll" target="_blank" rel="noreferrer">
                <img alt="github logo" src={GitHubLogo}/>
            </a>
        </div>
    )
}

export default Footer;
