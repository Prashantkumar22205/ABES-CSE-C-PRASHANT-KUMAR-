import React from 'react'
import  './App.css'
import Book from './components/Book'
import Nav from './components/Nav'

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
const App = () => {
  return (
    <div >
      <Nav/>

       <Routes>
           
           <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
      </Routes>
      <div id='book'>
      <Book title="Physices" price="$1800"  img="https://img.freepik.com/premium-vector/vector-hand-drawing-physics-education-doodle-icon-idea-set_602351-720.jpg?semt=ais_hybrid&w=740&q=80"/>
      <Book title="Math" price="$1200" img ="https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid&w=740&q=80" />
      <Book title="Chemistry" price="$1400" img =" https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?semt=ais_hybrid&w=740&q=80"/>

      </div>
    </div>
  )
}

export default App
