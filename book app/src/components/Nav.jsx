import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import '../App.css'
import Book from './Book'
import Login from './Login'
import Register from './Register'
const Nav = () => {
  return (
    <div className='nav'>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HCcDWsgtQGZCaJznZ_l55YWHqQuEolgdJg&s" alt=""  height={100} width={100}/>

       <nav>
           
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
        </nav>
     
    </div>
  )
}

export default Nav
