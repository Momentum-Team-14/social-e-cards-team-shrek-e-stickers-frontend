import { useState } from 'react'

export const Header = () => {
const [display, setDisplay] = useState ('none')
const handleClick = () => {
    if (display === 'none') {
        setDisplay('block')
    } else {
        setDisplay('none')
    }
}
const handleProfile = ()=> {
    // how do I navigate to the user's profile? what useState should I use/create?
}
const handleSignOut = () => {
    // alert
    // need to figure out how to make a confirm alert and make the buttons go baack to either the home page or login page
}
    return (
        <div className="header">
            <div className="logo">
                {/* <image src="--INSERT LOGO CUTOUT HERE--"/> */}
            </div>
            <div className="login-info" onClick={()=> handleClick}>
                username
            </div>
            <div className="drop-down-menu" style={{display:display}}>
                <div onClick={()=>handleProfile}>My Profile</div>
                <div onClick={()=>handleSignOut}>Sign Out</div>
            </div>
        </div>
    )
}