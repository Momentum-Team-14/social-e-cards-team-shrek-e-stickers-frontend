import './App.css';
import { Homepage } from './components/Homepage'
import { Profile } from './components/Profile'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { useState } from 'react'
import { Login } from './components/Login'
import { Routes, Route } from 'react-router-dom'

// header will be built here, in return ()
// if !isLoggedIn, return LoginPage. if isLoggedIn, return Homepage
// **what vairables and models do we need to pass in?

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  if (!isLoggedIn) {
    return(<Login setIsLoggedIn={setIsLoggedIn} />)
  }

  return (
    <>
    <Header/>
    <NavBar/>
    <button onClick={() => setIsLoggedIn(false)}>Click to see Login Page</button>
    <Routes>
      <Route 
        path='' 
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
