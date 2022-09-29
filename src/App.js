// TODO: Navigate back to login after logging out

import './App.css';
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Homepage } from './components/Homepage'
import { Profile } from './components/Profile'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { StickerForm } from './components/CreateSticker'
import { useState } from 'react'
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
      .then(() => {
        setAuth('', null)
        // return <Navigate to='../' />
      })
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
        path="register"
        element={<Register setAuth={setAuth} isLoggedIn={isLoggedIn} />}
      />
      <Route 
        path='stickrs' 
        element={<Homepage 
          // user={user}
        />}
      />
      <Route 
        path='profile' 
        element={<Profile token={token} 
          // user={user}
        />}
      />
      <Route
        path='new'
        element={<StickerForm token={token}
      />}
      />
      <Route 
        path='profile/:userId' 
        element={<Profile token={token} 
          // user={user}
        />}
      />
      <Route
        path='edit'
        element={<EditForm token={token} id={sticker.id}
      />}
      />
      <Route
        path='delete'
        element={<ConfirmDelete token={token} id={sticker.id}
      />}
      />
    </Routes>
    </>
  )
}
// header built here **only displayed if logged in
export default App;
