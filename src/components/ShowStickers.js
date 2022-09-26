import { useState } from 'react'

export const ShowStickers = ({stickers}) => {
    
    return (
        <div>
        <h2>All Stickrs</h2>
            <div>
                {console.log(stickers)}
                <div className='sticker-list'>
                {stickers.map((sticker) => (
                    <Sticker
                    title={sticker.title}
                    creator={sticker.creator}
                    message={sticker.message}
                    imageUrl={sticker.image_url}
                    id={sticker.id}
                    background={sticker.background_color}
                    patternUrl={sticker.pattern_url}
                    font={sticker.font}
                    fontColor={sticker.font_color}
                    />
                    ))}
                    </div>
                </div>
        </div>
)}

const Sticker = ({ title, creator, message, imageUrl, id, background, patternUrl, font, fontColor }) => {
    const [imageBroken, setImageBroken] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(!expanded)
    }

return (
    <div className='container'>
    <div key={id} >
        <div className='sticker' 
        style={{ backgroundColor: background, 
            backgroundImage: <img src={patternUrl} alt='pattern'></img>
             }}>
        <img className='pic' src = {imageBroken ? 'https://cdn-icons-png.flaticon.com/512/107/107817.png' : imageUrl} onError={() => setImageBroken(true)} alt={"Sticker for " + title}></img></div>
        <h4>{title}</h4>
        <button onClick={() => handleClick()}>
        {expanded ? 'Less' : 'More'} info
        </button>
        { expanded ? ( creator ? <p>{creator}</p> : '') : ''}
        { expanded ? ( message ? <p>{message}</p> : '') : ''}
    </div>
    </div>
)
}