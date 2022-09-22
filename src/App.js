import './App.css';
import { Homepage } from './components/Homepage'
import { Header } from './components/Header'
import { Navbar } from './components/NavBar'
import { useState } from 'react'
import { Login } from './components/Login'

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
    <Homepage user={user}/>
    <button onClick={() => setIsLoggedIn(false)}>Click to see Login Page</button>
    </>
  )
}
// header built here **only displayed if logged in
export default App;
