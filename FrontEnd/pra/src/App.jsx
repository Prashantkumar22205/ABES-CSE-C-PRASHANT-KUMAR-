import { useEffect, useState } from 'react'
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
import Link from './components/Link';
import Fashion from './components/Fashion';


function App() {
  // const [count, setCount] = useState(0)
  const [books,setBooks] = useState([]);
   const [weather , setWeather] = useState([]);

   const weatherdata= ()=>{
      const d= fetch('http://api.weatherstack.com/?')
   }
   const data = async()=>{
       const responce= await fetch('https://fakestoreapi.com/products')
      
       const getData= await responce.json();
       setBooks(getData);
   }
    useEffect(()=>{
      data();
    },[])
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
  
     {/* <Counter/> */}

     {/* <Link/> */}

     {
      books.map((elem,idx)=>{

        return  <Fashion key={idx}  img={elem.image} title={elem.title} price={elem.price} />
      })
     }
    
     
    </div>
  )
}

export default App
