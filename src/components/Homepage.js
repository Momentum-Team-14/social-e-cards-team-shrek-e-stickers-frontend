import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import axios from 'axios'


// pass in {user}?
export const Homepage = () => {
const [stickers, setStickers] = useState([])


useEffect(() => {
    console.log('sticker effect running')
    axios
        .get(`https://team-shrek-e-stickers-backend.herokuapp.com/stickers/`)
        .then((res) => setStickers(res.data))

}, [])

    return (
        <>
        <div className="container">
            <Header/>
            <NavBar/>
                <div className="buttons">
                <button type="folder">My Stickrs</button>
                <button type="following">Following</button>
                <button type="all-stickers">All Stickrs</button>
                </div>
                <div className="binder">
                    <div>
                        <h2>My Folder</h2>
                        {stickers.map((sticker) => (
                            <div className="sticker" onClick={() => {setExpanded(expanded)}}>{sticker}</div>
                        ))}
                    </div>
                 </div>   
                 <div className="create-button">Create New Stickr</div>
            </div>
        </> 
    )
}