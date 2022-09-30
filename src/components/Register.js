// TODO: Login after registering

import axios from 'axios'
import { useState } from 'react'
import logo from '../resources/logo-for-login.jpg'
import { Link, Navigate } from 'react-router-dom'

export const Register = ({ setAuth, isLoggedIn }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(null)

        axios
            .post('https://team-shrek-e-stickers-backend.herokuapp.com/auth/users/', {
                username: username,
                password: password,
            })
            .then((res) => {
                const token = res.data.auth_token
                setAuth(username, token)
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    if (isLoggedIn) {
        return <Navigate to='/stickrs' />
    }

    return (
        <>
        <div className='login-container'>
        <img className='login-logo'src={logo} alt='login-logo'></img>
        <h1>Welcome to Stickrs</h1>
        <p>Please register a username and password</p>
        {error && <p className="error">{error} </p> }
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
                <input type='submit' className='btn' value='Register' />
            </div>
        </form>
        <div>
            <Link to='../'>
                Back to Login
            </Link>
        </div>
        </div>
        </>
    )
}