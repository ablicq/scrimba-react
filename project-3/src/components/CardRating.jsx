import React from "react";
import star_icon from "../assets/star-solid.svg"

export default function CardRating({ rating, reviewCount, location }) {
    return (
        <div className="card-rating">
            <img className="card-rating-star" src={star_icon} />
            <span className="card-rating-nstars">{rating}</span>
            <span className="card-rating-nratings gray">({reviewCount}) • </span>
            <span className="card-rating-location gray">{location}</span>
        </div>
    )
}