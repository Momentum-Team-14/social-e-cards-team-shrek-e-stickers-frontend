import logo from './logo.svg';
import './App.css';
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
    
      <div className='nathan'>Stickr App is running!!</div>

    <div>This matches</div>

    <button onClick={() => setIsLoggedIn(false)}>Click to see Login Page</button>
    </>
  )
}
// header built here **only displayed if logged in
export default App;
