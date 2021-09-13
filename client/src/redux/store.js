
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducer";
const initialState ={
    cart :{
      cartItems :localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] 
    }
  }

const devtool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer,initialState,compose(applyMiddleware(thunk),devtool))
export default store ;