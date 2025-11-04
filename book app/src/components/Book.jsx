import React,{useState} from 'react'
import '../App.css'
const Book = (props) => {
     const [count, setCount] = useState(0)
     function increment(){
      setCount(count+1)
     }
  
     function decrement(){
      setCount(count-1)
     }
  return (
    <div className='card'>
      <img src={props.img} alt="" width={100} height={100} />
      <h1>Title:{props.title}</h1>
      <h1>Price:{props.price}</h1>


<div>
   <button  onClick={increment}> +</button>
      <span >{count}</span>
      <button onClick={decrement}>-</button>
      </div>
      
    </div>
  )
}

export default Book
