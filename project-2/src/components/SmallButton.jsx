import React from "react"

export default function SmallButton({ icon, href }) {
    return (
        <a href={href} target="_blank" className="small-button">
            <img src={icon} />
        </a>
    )
}