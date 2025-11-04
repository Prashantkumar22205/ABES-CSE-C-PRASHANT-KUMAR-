import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import img from './assets/photo.avif'
import Navbar from './components/Navbar';
import Button1 from './components/Button1';
import Card1 from './components/Card1';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Card2 from './components/Card2';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import Comp4 from './components/Comp4';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page'>
    {/* <Navbar name='FastTast'/>
    <Comp2/>
    <div className='boxes'>
      <Comp3/>
      <Comp3/>
      <Comp3/>
    </div>
    <Comp4/> */}
  
     <Counter/>
     
    </div>
  )
}

export default App
