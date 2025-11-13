import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
const Links = () => {
    function Home(){
        return <h1>This is my Home page</h1>
    }
    function About(){
        return <h1>This is my About page</h1>
    }
   


  return (
    <div>
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
        </nav>
      <Routes>
           <Route path="/" element={Home} />
           <Route path="/about" element={About} />
           <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default Links
