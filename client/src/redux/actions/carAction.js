


import axios from 'axios';
import { ADD_TO_CART ,REMOVE_FROM_CART} from '../actionTypes';
 export const addToCart = (id ,qty) => async (dispatch,getState) => {
      
          let {data} = await axios.get(`/food/${id}`)
          console.log(data)
          dispatch({
              type : ADD_TO_CART ,
              // payload : res.data._id ,
              // qty
               payload : {
                id :data._id ,
                foodName :data.foodName ,
                description : data.description,
                capacity :data.capacity ,
                price :data.price ,
                avatar :data.avatar,
                qty
              } 
          })
          // localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
         }
      
  
    export const removeFromCart = (id) => (dispatch,getState) => {
          dispatch({
              type: REMOVE_FROM_CART,
              payload: id ,
            });
          //  localStorage.setItem('cart',json.stringify(getState().cart.cartItems))   
                 }