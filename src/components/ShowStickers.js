import { useState } from 'react'


export const ShowStickers = ({stickers}) => {
    const [expanded, setExpanded] = useState(false)
    const [imageBroken, setImageBroken] = useState(false)

    const handleClick = () => {
        setExpanded(true)
    }

   
return (
    <div>
        <h2>All Stickrs</h2>
            <div className="sticker-list">
                {console.log(stickers)}
                {stickers.map((sticker) => (
                    <div>
                        <img src = {imageBroken ? 'https://cdn-icons-png.flaticon.com/512/107/107817.png' : sticker.image} onError={() => setImageBroken(true)} alt={"Sticker for " + sticker.name}></img>
                        <h4>{sticker.name}</h4>
                        <button onClick={() => handleClick()}>
                            {expanded ? 'Less' : 'More'} info
                            </button>
                        { expanded ? ( sticker.message ? <p>{sticker.message}</p> : '') : ''}
                    </div>
                ))}
            </div>
    </div>
)}