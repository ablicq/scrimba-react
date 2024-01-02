import React from "react"

export default function LargeButton({ className, icon, text, href }) {
    return (
        <a href={href} target="_blank" className={`large-button ${className}`}>
            <img src={icon} />
            <span>{text}</span>
        </a>
    )
}