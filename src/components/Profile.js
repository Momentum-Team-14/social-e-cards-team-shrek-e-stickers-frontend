// TODO: Only display follow user button if profile isn't logged in user, and logged in user hasn't already followed (maybe display message if they are following)

import { useState, useEffect } from "react"
import axios from "axios";
import { ShowStickers } from "./ShowStickers";
import { useParams } from "react-router-dom";

export const Profile = ({ token, currentUser }) => {
    const [user, setUser] = useState(null);
    const { userId } = useParams()
    
    useEffect(() => {
        console.log('sticker effect running')
        axios
            .get(`https://team-shrek-e-stickers-backend.herokuapp.com/profile/${userId}/`,
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => setUser(res.data))
    
    }, [])

    // allows user to follow
    const handleFollowUser = () => {
        axios
        .post(`https://team-shrek-e-stickers-backend.herokuapp.com/user/${userId}/follow/`, 
        {},
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
    }

    if (user) {
        return(
                <div className='profile'>
                    <div className='profile-sidebar'>
                        <div>Profile</div>
                        <div>Name: {user.username} </div>
                        <div>Avatar: 
                            {/* {user.avatar} */}
                            <img className='avatar' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='profile'/>
                        </div>
                        <div>Followers: {user.followed_count} </div>
                        <div>Bio: {user.bio ? user.bio : 'n/a'} </div>
                        <button type="follow" onClick={() => {handleFollowUser()}}>Follow User</button>
                    </div>
                    <div className='profile-main'>
                        <ShowStickers stickers={user.stickers}/>
                    </div>
                </div>
        )
    }
}