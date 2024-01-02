import React from "react"
import { createRoot } from "react-dom/client"


const root = createRoot(document.getElementById("root"))
root.render(
    <ul>
        <h1>My Shopping List</h1>
        <li>potatoes</li>
        <li>tooth paste</li>
        <li>carrots</li>
    </ul>
)