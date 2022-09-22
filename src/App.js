import './App.css';
import { Homepage } from './components/Homepage'
import { Header } from './components/Header'
import { Navbar } from './components/NavBar'
// header will be built here, in return ()
// if !isLoggedIn, return LoginPage. if isLoggedIn, return Homepage
// **what vairables and models do we need to pass in?

function App() {
  return (
    <>
    <Header/>
    <NavBar/>
    <Homepage user={user}/>
    </>
  )
}
// header built here **only displayed if logged in
export default App;
