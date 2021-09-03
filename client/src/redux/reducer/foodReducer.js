// import { ADD, GET, EDIT, DELETE } from '../actionTypes';

import { ADD, DELETE, EDIT, GET } from "../actionTypes";



const initialState = {
    foods : null ,
    loading : true
} 

const foodReducer = (state=initialState ,{type,payload}) => {
    switch (type) {
        case GET:
            return {...state , loading : false ,foods : payload}
        case ADD :
            return {...state , loading : false , foods : [...state.foods , payload]}  
        case EDIT:
            return {...state , loading : false , foods : state.foods.map(el => el._id === payload._id ? payload : el)}
        case DELETE :
            return {...state , loading : false , foods : state.foods.filter(el => el._id !== payload._id)}
        default:
            return state
    }
}
 export default foodReducer ;
 
