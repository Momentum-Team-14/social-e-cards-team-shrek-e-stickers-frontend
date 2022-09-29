// TODO: Navigate back to login after logging out

import './App.css';
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Homepage } from './components/Homepage'
import { Profile } from './components/Profile'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { useState, useEffect } from 'react';
import { StickerForm } from './components/CreateSticker'
import useLocalStorageState from 'use-local-storage-state';
import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

// header will be built here, in return ()
// if !isLoggedIn, return LoginPage. if isLoggedIn, return Homepage
// **what vairables and models do we need to pass in?

function App() {
  const [token, setToken] = useLocalStorageState('stickerToken', null)
  const [username, setUsername] = useLocalStorageState('stickerUsername', '')
  const navigate = useNavigate()

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
        navigate('/')
      })
  }

  const [currentUser, setCurrentUser] = useState(null);
    
  useEffect(() => {
      axios
          .get(`https://team-shrek-e-stickers-backend.herokuapp.com/myprofile/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((res) => setCurrentUser(res.data))
  
  }, [])

  {currentUser && console.log(currentUser.id)}
  const isLoggedIn = username && token

  // if (!isLoggedIn) {
  //   return <Navigate to='/' />
  // }

  return (
    <>
    {isLoggedIn && currentUser && <Header username={currentUser.username}/>}
    {isLoggedIn && (
      <nav>
        <Link to="/"><button onClick={handleLogout}>
          Log Out
        </button></Link>
      </nav>
    )}
    {isLoggedIn && currentUser && <NavBar currentUserID={currentUser.id}/>}
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
        element={<Homepage token={token} />}
      />
      <Route
        path='new'
        element={<StickerForm token={token}
      />}
      />
      {currentUser && <Route 
        path='profile/:userId' 
        element={<Profile token={token} currentUser={currentUser} />}
      />}
    </Routes>
    </>
  )
}
// header built here **only displayed if logged in
export default App;
