import React, { useEffect, useState } from "react";

export default function Meme() {
    let [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    let [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function randomChoice(a) {
        const idx = Math.floor(Math.random() * a.length)
        return a[idx]
    }

    function getRandomImage() {
        const image = randomChoice(allMemes)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: image.url
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    placeholder="Top Text"
                    type="text"
                    value={meme.topText}
                    onChange={handleChange}
                    name="topText" />
                <input
                    className="form--input"
                    placeholder="Bottom Text"
                    type="text"
                    value={meme.bottomText}
                    onChange={handleChange}
                    name="bottomText" />
                <button
                    className="form--button"
                    onClick={getRandomImage}>
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}