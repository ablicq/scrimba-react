import React from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import cards from "./data"

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <div className="cards-list">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        img={`images/${card.coverImg}`}
                        rating={card.stats.rating}
                        reviewCount={card.stats.reviewCount}
                        location={card.location}
                        title={card.title}
                        price={card.price}
                        openSpots={card.openSpots}
                    />
                ))}
            </div>
        </div>
    )
}