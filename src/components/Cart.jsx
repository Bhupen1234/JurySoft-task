import { Button, Paper } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();


    const cartItems = useSelector((state)=>state.cart)  

    const handleRemoveItem =(id)=>{
         dispatch(removeFromCart(id))
    }
  return (
    <div className="cart">
        {
            cartItems.map((cartItem)=>{
                return(
                  <Paper key={cartItem.id} style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                     <h3>{cartItem.name}</h3>
                     <h3>{cartItem.price}</h3>
                      <Button variant='contained' onClick={()=>handleRemoveItem(cartItem.id)}>Remove</Button>
                  </Paper>
                )
            })
        }
    </div>
  )
}

export default Cart
