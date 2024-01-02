import React from "react";
import image_grid from "../assets/image-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero-image" src={image_grid} />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}