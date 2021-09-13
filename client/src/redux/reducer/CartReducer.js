

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";



const initialState = {
    cartItems: [],
  };


const cartReducer = (state = initialState, {type,payload}) => {
switch (type) {
    case ADD_TO_CART:
        const item = payload ;
        // const existItem = state.cartItems.find( x => x.id === item.id)
        // if(existItem){
        //     return{...state , cartItems : state.cartItems.map((x) => x.id == existItem.id) ? item : x }
        // } else { }
            return{...state , cartItems : [...state.cartItems , item]}
        

        case REMOVE_FROM_CART :
            return {...state , cartItems :state.cartItems.filter((x) => x.id !== payload)}
    default:
        return state;
}
}
export default cartReducer ;