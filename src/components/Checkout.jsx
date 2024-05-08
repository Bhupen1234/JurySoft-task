import React from 'react'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const Checkout = () => {

    const cartItems = useSelector((state)=>state.cart);
    
    let totalAmt =0;


    cartItems.forEach(element => {
        totalAmt+=element.price
    });

    

  return (
    <div>
        <h1>Checkout ({cartItems.length})</h1>
       <Cart/>

       <hr />

       <div className='total' style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
          <h3>Total</h3>
          <h3>{totalAmt} Rs</h3>
       </div>
    </div>
  )
}

export default Checkout
 