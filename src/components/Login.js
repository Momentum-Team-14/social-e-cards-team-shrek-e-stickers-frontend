import { useState } from 'react'
import logo from '../resources/logo-for-login.jpg'
// Add style later

export const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // update when back end has user model running
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoggedIn(true)
    }

    return (
        <>
        <div className='login-container'>
        <img className='login-logo'src={logo} alt='login-logo'></img>
        <h1>Welcome to Stickrs</h1>
        <p>Please log in to view and create Stickrs!</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username-input'>Username: </label>
                <input
                    type='text'
                    id='username-input'
                    value={username}
                    required
                    onChange = {(e) => setUsername(e.target.value)}
                ></input>
            </div>
            <div>
            <label htmlFor='password-input'>Password: </label>
                <input
                    type='password'
                    id='password-input'
                    value={password}
                    required
                    onChange = {(e) => setPassword(e.target.value)}
                ></input>
            </div>
            <div>
                <input type='submit' className='btn' value='Log In' />
            </div>
            <button onClick={() => setIsLoggedIn(true)}>Click to see Home Page</button>
        </form>
        </div>
        </>
    )
}