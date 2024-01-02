import React from "react";
import troll_face from "../assets/troll_face.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header--icon" src={troll_face} />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--subtitle">React Course - Project 3</h4>
        </header>
    )
}