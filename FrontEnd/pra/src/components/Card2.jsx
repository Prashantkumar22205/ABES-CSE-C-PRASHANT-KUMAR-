import React from 'react'
import './card2.css'
const Card2 = (props) => {
  return (
    <div className='card2'>
         <img className='image' src="https://thumbs.dreamstime.com/b/png-d-rendered-businessman-clipboard-professional-cartoon-character-office-worker-against-transparent-background-384937050.jpg" alt="" />
         <h2>{props.name}</h2>
         <p>{props.edu}</p>
    </div>
  )
}

export default Card2
