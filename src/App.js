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
import { EditForm } from './components/EditSticker'
import { ConfirmDelete } from './components/ConfirmDelete'

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
      token && axios
          .get(`https://team-shrek-e-stickers-backend.herokuapp.com/myprofile/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((res) => {
            setCurrentUser(res.data)
          })
  
  }, [token])

  const isLoggedIn = username && token


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
      <Route
        path='edit/:stickerId'
        element={<EditForm token={token} 
        />}
        />
      <Route
        path='delete/:stickerId'
        element={<ConfirmDelete token={token}
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
