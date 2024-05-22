import React, { useContext } from 'react'
import './Card.scss'
import MainContext from '../../context/context'
function Card({item}) {
  const {addToBasket}=useContext(MainContext)
  return (
    <div className='card'>
    <img src={item.image} alt="" />
    <h5>{item.title}</h5>
    <p>{item.desc}</p>
    <div className="buttons">
      <button 
      onClick={()=>{
        addToBasket(item)
      }}
      >Cart</button>
      <span>View</span>
    </div>

  </div>
  )
}

export default Card