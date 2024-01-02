import React from "react";
import CardRating from "./CardRating";

export default function Card({ img, rating, reviewCount, location, title, price, openSpots }) {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className="card">
            {badgeText && <div className="card-availability">{badgeText}</div>}
            <img src={img} className="card-image" />
            <CardRating rating={rating} reviewCount={reviewCount} location={location} />
            <p className="card-title">{title}</p>
            <p className="card-price"><span className="bold">From ${price}</span> / person</p>
        </section>
    )
}