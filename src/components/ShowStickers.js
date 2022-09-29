import { useState } from 'react'
import { Navigate } from 'react-router-dom'

export const ShowStickers = ({stickers}) => {
    
    return (
        <div>
        <h2>All Stickrs</h2>
            <div>
                {console.log(stickers)}
                <div className='sticker-list'>
                {stickers.map((sticker) => (
                    <div key={sticker.id}>
                        <Sticker
                        sticker={sticker}
                        title={sticker.title}
                        creator={sticker.creator}
                        creatorPk={sticker.creator_pk}
                        message={sticker.message}
                        imageUrl={sticker.image_url}
                        background={sticker.background_color}
                        patternUrl={sticker.pattern_url}
                        fontColor={sticker.font_color}
                        />
                    </div>
                    ))}
                    </div>
                </div>
        </div>
)}

const Sticker = ({ sticker, title, creator, creatorPk, message, imageUrl, background, patternUrl, fontColor }) => {
    const [imageBroken, setImageBroken] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(!expanded)
    }
    const handleEdit = (sticker) => {
        return <Navigate to="/edit" sticker={sticker}/>
    }
    const handleDelete = (sticker) => {
        return <Navigate to="/delete" sticker={sticker} />
    }

return (
    <div className='sticker-container'>
        <div className='sticker' 
        style={{ backgroundColor: background, 
            backgroundImage: <img src={patternUrl} alt='pattern'></img>,
            color: fontColor
             }}>
        <img className='pic' src = {imageBroken ? 'https://cdn-icons-png.flaticon.com/512/107/107817.png' : imageUrl} onError={() => setImageBroken(true)} alt={"Sticker for " + title}></img>
        <h3>{title}</h3>
        <div className="expand-info">
        <button onClick={() => handleClick()}>
        {expanded ? 'Less' : 'More'} info
        </button>
        <button onClick={()=> handleEdit(sticker)}>Edit</button>
        <button onClick={()=> handleDelete(sticker)}>Delete</button>
        { expanded ? ( creator ? <p><a href={`/profile/${creatorPk}`}>{creator}</a></p> : '') : ''}
        { expanded ? ( message ? <p>{message}</p> : '') : ''}
        </div>
        </div>
    </div>
)
}