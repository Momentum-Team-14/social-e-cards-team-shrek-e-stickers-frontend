export const NavBar = ({ currentUserID }) => {
    return(
        <>
        <div className='navbar'>
            <div><a href='/stickrs'>Homepage</a></div>
            <div><a href={`/profile/${currentUserID}`}>Profile</a></div>
            <div>Create Stickr</div>
        </div>
        </>
    )
}