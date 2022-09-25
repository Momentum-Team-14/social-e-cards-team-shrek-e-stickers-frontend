import { useState, useEffect } from 'react'
import { ShowStickers } from './ShowStickers'
import axios from 'axios'


// pass in {user}?
export const Homepage = () => {
const [url, setUrl] = useState('')
const [stickers, setStickers] = useState([])
const allUrl = 'https://team-shrek-e-stickers-backend.herokuapp.com/stickers/'

// const handleAll = (url) => {
//     console.log(url)
//     setUrl(url)
// }
useEffect(() => {
    console.log('sticker effect running')
    axios
    .get('https://team-shrek-e-stickers-backend.herokuapp.com/stickers/')
    .then((res) => setStickers(res.data))
}, [allUrl])
 

if (stickers.length > 0) {

return (
        <>
        <div className="container">

                <div className="buttons-bar">
                <button type="folder">My Stickrs</button>
                <button type="following">Following</button>
                <button type="all-stickers">All Stickrs</button>
                </div>
                <div className="binder">
                    <ShowStickers stickers={stickers}/>
                 </div>   
            </div>
        </> 
    )
}}