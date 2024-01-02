import React from "react"
import SmallButton from "./SmallButton"
import facebook_icon from "../assets/square-facebook.svg"
import twitter_icon from "../assets/square-twitter.svg"
import instagram_icon from "../assets/square-instagram.svg"
import github_icon from "../assets/square-github.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <SmallButton icon={facebook_icon} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            <SmallButton icon={twitter_icon} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            <SmallButton icon={instagram_icon} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            <SmallButton icon={github_icon} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </footer>
    )
}