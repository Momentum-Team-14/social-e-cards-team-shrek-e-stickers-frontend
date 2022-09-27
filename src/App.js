import './App.css';
import { Homepage } from './components/Homepage'
import { Profile } from './components/Profile'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { useState } from 'react'
import { Login } from './components/Login'
import useLocalStorageState from 'use-local-storage-state';
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from 'axios';

// header will be built here, in return ()
// if !isLoggedIn, return LoginPage. if isLoggedIn, return Homepage
// **what vairables and models do we need to pass in?

function App() {
  const [token, setToken] = useLocalStorageState('stickerToken', null)
  const [username, setUsername] = useLocalStorageState('stickerUsername', '')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const handleLogout = () => {
    axios
      .post(
        'https://team-shrek-e-stickers-backend.herokuapp.com/auth/token/logout/',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() =>
        setAuth('', null)
      )
      // return <Navigate to='/' />
  }

  const isLoggedIn = username && token

  // if (!isLoggedIn) {
  //   return <Navigate to='/' />
  // }

  return (
    <>
    {isLoggedIn && <Header/>}
    {isLoggedIn && (
      <nav>
        <button onClick={handleLogout}>
          Log Out
        </button>
      </nav>
    )}
    {isLoggedIn && <NavBar/>}
    <Routes>
      <Route
        path="/"
        element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}
      />
      <Route 
        path='stickrs' 
        element={<Homepage 
          // user={user}
        />}
      />
      <Route 
        path='profile' 
        element={<Profile 
          // user={user}
        />}
      />
    </Routes>
    </>
  )
}
// header built here **only displayed if logged in
export default App;
