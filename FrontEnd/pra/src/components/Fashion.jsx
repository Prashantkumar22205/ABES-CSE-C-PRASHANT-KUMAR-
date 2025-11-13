import React from 'react'
import './fashion.css'

const Fashion = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" height={100} width={100} />
        <h4>Title:{props.title}</h4>
        <h4>Price:{props.price}</h4>
    </div>
  )
}

export default Fashion
