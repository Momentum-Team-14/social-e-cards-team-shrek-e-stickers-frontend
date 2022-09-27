import { useState, useEffect } from "react"
import axios from "axios";
import { ShowStickers } from "./ShowStickers";

export const Profile = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        console.log('sticker effect running')
        axios
            .get(`https://team-shrek-e-stickers-backend.herokuapp.com/profile/3/`)
            .then((res) => setUser(res.data))
    
    }, [])

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
                        <div>Followers:  </div>
                        <div>Bio: {user.bio ? user.bio : 'n/a'} </div>
                    </div>
                    <div className='profile-main'>
                        <ShowStickers stickers={user.stickers}/>
                    </div>
                </div>
        )
    }
}