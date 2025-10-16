import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import img from './assets/photo.avif'
import Navbar from './components/Navbar';
import Button1 from './components/Button1';
import Card1 from './components/Card1';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>hi student</h1>
    <Navbar/>
     <Button1/> 
     <Card1/>
    </div>
  )
}

export default App
