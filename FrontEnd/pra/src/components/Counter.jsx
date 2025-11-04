import React, { useState} from 'react'

const Counter = () => {
   const [count, setCount] = useState(0)
   function increment(){
    setCount(count+1)
   }

   function decrement(){
    setCount(count-1)
   }

  return (
    <div>
      <h1>Counter App</h1>
      <button  onClick={increment}> +</button>
      <span >{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
