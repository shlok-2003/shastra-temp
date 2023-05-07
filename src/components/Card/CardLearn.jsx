import React from 'react'
import "../../pages/Learn.css"
const Card = (props) => {

    return (
      <div>
      <div className='card'>
      <img src={props.img} className="card-image" />
      <p>{props.title}</p> 
      </div>
      </div>
    )
  }
  
  export default Card