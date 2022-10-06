import School from './component/School';
import Result from './component/Result';
import Reducer from './Reducer';
import Score from './Score';
import Redu from './Redu';
import Redu2 from './Redu2';
import './App.css'
import RenderProduct from './addToCart/RenderProduct';
import { useState } from 'react';
import RenderCart from './addToCart/RenderCart';
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
function App() {
  const [cart,setCart] = useState([]);
  const [page, setPage] = useState("products");
 

  const addToCart =(product)=>{
      setCart([...cart,{...product}])
  }

  const removeFromCart =(productToRemove)=>{
    setCart(cart.filter((product)=>product!==productToRemove))
}

  const navigateTo =(nextPage)=>{
      setPage(nextPage)
  }
  return (
    <div className="App">
      <h1 className='header'>
        <button onClick={()=>navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
        <button onClick={()=>navigateTo(PAGE_PRODUCTS)}>View Product</button>
      </h1>
      {page === PAGE_CART &&<RenderCart cart={cart} removeFromCart={removeFromCart}/>}
      {page === PAGE_PRODUCTS &&<RenderProduct addToCart={addToCart}/>}
    </div>
  );
}

export default App;
