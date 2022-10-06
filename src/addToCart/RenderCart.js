import React from 'react'
import { useState } from 'react'
const RenderCart = ({cart,removeFromCart}) => {
  return (
    <div>
      <h1>Cart</h1>
      <div className='products'>
      {cart.map((product,idx)=>(
      <div className='product' key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt={product.image} />
        { <button onClick={()=>removeFromCart(product)}>Remove from cart</button> }
      </div>
    
      ))}
      </div>
    </div>
  )
}

export default RenderCart
