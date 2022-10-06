import React from 'react'
import { useState } from 'react';

const RenderProduct = ({addToCart}) => {
    const [products] = useState([
        {
          name: "Blancket",
          cost: "$19.99",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM5uUTR3_6nRmPHberfSMyMB0pTF7UaCvRg&usqp=CAU"
        },
        {
          name: "AA Battery",
          cost: "$2.99",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PZ1F8g475T3bc3rwnmnM0aXIYBq-9Gf7eA&usqp=CAU"
        }
      ]);
  return (
    <div>
        
      <h1>Products</h1>
      <div className='products'>
      {products.map((product,idx)=>(
      <div className='product' key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt={product.image} />
        <button onClick={()=>addToCart(product)}>Add to cart</button>
      </div>
    
      ))}
      </div>
    </div>
  )
}

export default RenderProduct
