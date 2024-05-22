import React, { useContext } from 'react'
import MainContext from '../../context/context'
import './Basket.scss'
function Basket({item}) {
  const {deleteToBasket,addToBasket,basketItems}=useContext(MainContext)
  return (
    <div className="tab">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Total Price</th>
      <th scope="col">Add</th>
      <th scope="col">Count</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      basketItems.map((item,index)=>{
      return   <tr key={index}>
      <th scope="row"><img src={item.item.image} style={{width:'80px'}} alt="" /></th>
      <td>{item.item.title}</td>
      <td>{item.item.price}</td>
      <td>{item.totalPrice}</td>
      <td><button onClick={()=>{
        addToBasket(item.item)
      }}>Add</button></td>
      <td>{item.count}</td>
      <td><button onClick={()=>{
        deleteToBasket(item.item)
      }}>Delete</button></td>
    </tr>
      })
    }
  </tbody>
</table>
    </div>
  )
}

export default Basket