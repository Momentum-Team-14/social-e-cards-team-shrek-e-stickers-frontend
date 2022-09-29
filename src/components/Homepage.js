// TODO: Update followed users to be followed users

import { useState, useEffect } from 'react'
import { ShowStickers } from './ShowStickers'
import axios from 'axios'

export const Homepage = ({ token }) => {
const [url, setUrl] = useState('')
const [stickers, setStickers] = useState([])
const [display, setDisplay] = useState('All Stickrs')
const [view, setView] = useState('my');
const allUrl = 'https://team-shrek-e-stickers-backend.herokuapp.com/stickers/'

// list of stickers for all users
const handleAll = () => {
    axios
    .get('https://team-shrek-e-stickers-backend.herokuapp.com/stickers/')
    .then((res) => setStickers(res.data.results))
}

// list of current user's stickers
const handleMy = () => {
    axios
    .get('https://team-shrek-e-stickers-backend.herokuapp.com/mystickers/',
    {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    .then((res) => {
        console.log(res.data.results)
        setStickers(res.data.results)
    })
}

// list of stickers from followed users
const handleFollow = () => {
    axios
    .get('https://team-shrek-e-stickers-backend.herokuapp.com/stickers/following/',
    {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    .then((res) => setStickers(res.data.results))
    // .get('https://team-shrek-e-stickers-backend.herokuapp.com/users')
    // .then((res) => {
    //     let collection = []
    //     for (const user of res.data) {
    //         collection.concat(user.stickers)
    //     }
    //     setStickers(collection)
    // })
}

// Sets up default to display all stickers
useEffect(() => {
    if (stickers.length === 0) {
        axios
        .get('https://team-shrek-e-stickers-backend.herokuapp.com/stickers/')
        .then((res) => {
            setStickers(res.data.results)})
    }

}, [])

if (stickers.length > 0) {

return (
        <>
        <div className="container">

                <div className="buttons-bar">
                <button type="folder" onClick={() => {handleMy()}}>My Stickrs</button>
                <button type="following" onClick={() => {handleFollow()}}>Following</button>
                <button type="all-stickers" onClick={() => {handleAll()}}>All Stickrs</button>
                </div>
                <div className="binder">
                    <ShowStickers stickers={stickers}/>
                </div>   
            </div>
        </> 
    )
}}