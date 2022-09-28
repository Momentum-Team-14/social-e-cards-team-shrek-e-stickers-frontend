import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export const StickerForm = ({ token }) => {
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('')
    const [message, setMessage] = useState('')
    const [fontColor, setFontColor] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()
    axios   
        .post ('https://team-shrek-e-stickers-backend.herokuapp.com/stickers/',
        {
            title: title,
            image_url: imageUrl,
            background_color: backgroundColor,
            message: message,
            font_color: fontColor,
        },
        {
            headers: {
                Authorization: `Token ${token}`,
        },
    }
    )
    .then((res) => {
        setSubmitted(true)
        setTitle('')
        setImageUrl('')
        setBackgroundColor('')
        setMessage('')
        setFontColor('')
    })
    .catch((err) => setError(err.response.data.error))
}

if (submitted) {
    return <Navigate to="/stickers/" />
}
// 'inputType' might be changes with select element. adding for a place-holder
const handleChange = (inputType, event) => {
    if (inputType === 'title') {
        setTitle(event.target.value)
    }
    if (inputType === 'image') {
        setImageUrl(event.target.value)
    }
    if (inputType === 'background color') {
        setBackgroundColor(event.target.value)
    }
    if (inputType === 'message') {
        setMessage(event.target.value)
    }
    if (inputType === 'font color') {
        setFontColor(event.target.value)
    }
}

return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
            <h2>Create a new Stickr:</h2>
            <div className="control">
            <label htmlFor="title-field" className="label">title</label>
                <input
                className="input"
                placeholder="title"
                type="text"
                value={title}
                required
                onChange={(e) => handleChange('title', e)}
                />
            </div>
            <div className="control">
            <label for="image-select">Choose an image:</label>
            <select name="images" id="image-select" onChange={(e) => handleChange('imageUrl', e)}>
                <option value=" ">--Please choose an image option--</option>
                <option value="donut" selected>donut</option>
                <option value="flower">flower</option>
                <option value="butterfly">butterfly</option>
                <option value="happy-sad-face">happy-sad face</option>
                <option value="ice-cream">ice cream</option>
                <option value="thumbs-up">thumbs up</option>
                <option value="heart">heart</option>
            </select>
            </div>   
            <div className="control">
            <label for="background-select">Choose a background color:</label>
            <select name="background" id="background-select" onChange={(e) => handleChange('backgroundColor', e)}>
                <option value=" ">--Please choose a color option--</option>
                <option value="black">black</option>
                <option value="white">white</option>
                <option value="yellow" selected>yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="purple">purple</option>
                <option value="red">red</option>
                <option value="pink">pink</option>
                <option value="orange">orange</option>
            </select>
            </div>
            <div className="control">
            <label htmlFor="message-field" className="label">Write a message:</label>
                <input
                className="input"
                placeholder="message"
                type="text"
                value={message}
                required
                onChange={(e) => handleChange('message', e)}
                />
            </div>
            <div className="control">
            <label for="font-color-select">Choose a font color:</label>
            <select name="font-colors" id="font-color-select" onChange={(e) => handleChange('font-color', e)}>
                <option value=" ">--Please choose a font color option--</option>
                <option value="black">black</option>
                <option value="white">white</option>
                <option value="yellow" selected>yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="purple">purple</option>
                <option value="red">red</option>
                <option value="pink">pink</option>
                <option value="orange">orange</option>
            </select>
            </div>
        </form>
    </div>





)
}