
import {combineReducers} from 'redux' ;
import foodReducer from './foodReducer';
import userReducer from './userReducer';
import cartReducer from './CartReducer'


const rootReducer = combineReducers({
    foodReducer,
    userReducer,
    cart:cartReducer
  })
  export default rootReducer