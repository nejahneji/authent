import { LOGIN, LOGIN_FAIL, LOGIN_SUCEESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionTypes";
import axios from 'axios'


export const registerUser =(newUser)=> async (dispatch)=>{
  dispatch({
      type:REGISTER
  })
  try {
     const res= await axios.post('/user/register',newUser)
     console.log(res) 
     localStorage.setItem('token', res.data.token)
     dispatch ({
         type:REGISTER_SUCCESS,
         payload:res.data
     })
  } catch (error) {
      dispatch({
          type:REGISTER_FAIL,
          payload :error.response.data
      })
  }
}
export const loginUser = (user) => async(dispatch) =>{
    dispatch({
        type:LOGIN
    })
    try {
        const res = await axios.post('user/login',user)
        console.log(res)
        localStorage.setItem('token',res.data.token)
        dispatch({
            type:LOGIN_SUCEESS,
            payload: res.data 
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data
        })
    }
}