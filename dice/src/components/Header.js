import React from "react";
import "../stylesheets/Header.css";

const Header = () => {
    return (
        <div className="header">
            <h1>5th Edition Dice Roller</h1>
            <form>
                <label className="themeSelect">Dice Theme:</label>
                <select className="themeSelect">
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                </select>
            </form>
        </div>
    )
}

export default Header;
