import React from "react"
import profile_picture from "../assets/slime.png"
import Info from "./Info"
import LargeButton from "./LargeButton"
import linkedin_icon from "../assets/linkedin.svg"
import email_icon from "../assets/envelope-solid.svg"

export default function Header() {
    return (
        <div className="header">
            <img className="profile-picture" src={profile_picture} alt="profile picture" />
            <Info />
            <div className="header-buttons">
                <LargeButton className="header-button-email" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" icon={email_icon} text="Email" />
                <LargeButton className="header-button-linkedin" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" icon={linkedin_icon} text="Linkedin" />
            </div>
        </div>
    )
}