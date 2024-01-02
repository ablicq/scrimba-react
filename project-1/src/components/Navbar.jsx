import React from "react"
import react_logo from "../assets/react.svg"

export default function Navbar() {
    return (
        <nav className="nav-container">
            <div className="nav-logo-title">
                <img className="nav-logo" src={react_logo} alt="react-logo" width="30px" height="30px" />
                <h3 className="nav-title">ReactFacts</h3>
            </div>
            <h4 className="nav-subtitle">React Course - Project 1</h4>
        </nav>
    )
}