import { useState, useEffect } from  'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const ConfirmDelete = ({token}) => {
    const { stickerId } = useParams()
    const [sticker, setSticker] = useState({})
    const navigate = useNavigate()
    
    useEffect (() => {
        axios
        .delete (`https://team-shrek-e-stickers-backend.herokuapp.com/stickers/${stickerId}`,
        {
            headers: {
                Authorization: `Token ${token}`,
            }})
            .then((res) => setSticker(res.data))
        }, [stickerId, token]) 
        
        const handleDelete = () => {
            navigate('stickrs')
    }
    const handleCancel = () => {
        navigate('stickrs')

    }

return (
    <div className="confirm-delete">
        <h2>Are you sure you want to delete {sticker.title} ?</h2>
        <button type='confirm' onClick={()=> handleDelete()}>Yes</button>
        <button type='cancel' onClick={()=> handleCancel()}>Cancel</button>
    </div>
)
}
