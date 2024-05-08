import { Card, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import products from "../products.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cartItems = useSelector((state)=>state.cart)  

  const getProductPresentInCart =(product)=>{
    for(let index =0;index<cartItems.length;index++){
        if(cartItems[index].id === product.id){
            return true
        }


    }

    return false
  }
    
  const handleAddToCart =(product) => {
     dispatch(addToCart(product))
  }


  




  return (
    <div className="product-list-wrapper">
      <h1>Product List</h1>
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item xs={12}  sm={4} lg={3}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {product.name}
                  </Typography>

                  <Typography variant="body2">{product.description}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {product.price} Rs
                  </Typography>
                </CardContent>
                <CardActions>

                    {
                        getProductPresentInCart(product)?(
                            <Button size="small"  variant="contained" onClick={()=>navigate('/checkout')}>Checkout</Button>
                          )
                        :
                        (
                            <Button size="small" onClick={()=>handleAddToCart(product)}  variant="contained">Add To Cart</Button>
                        )
                    }
                  
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>


    </div>
  );
};

export default ProductList;
