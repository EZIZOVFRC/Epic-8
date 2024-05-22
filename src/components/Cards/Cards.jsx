import React, { useContext } from 'react'
import MainContext from '../../context/context'
import Card from '../Card/Card'


function Cards({data}) {
const {basketItems}=useContext(MainContext)
  return (
    <div className="fcards">
      <h2>Our Products</h2>
   <div className="cards">
{
  data.map((item,index)=>{
    return <Card key={index} item={item}/>
  })
}
   </div>
    </div>
  )
}

export default Cards