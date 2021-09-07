import { LOGIN, LOGIN_FAIL, LOGIN_SUCEESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionTypes";

const initialState= {
    loading: false,
    token : null,
    users:null,
    errors: null,
    isAuth:false
}

const userReducer=(state=initialState, {type,payload}) =>{
    switch (type) {
        case REGISTER:
            return {...state, loading:false}
        case REGISTER_SUCCESS:
            return {...state,loading:false,users: payload}
        case REGISTER_FAIL:
            return {...state, loading:false,errors:payload}
        case LOGIN :
            return {...state , loading :true}
        case LOGIN_SUCEESS :
            return {...state , loading : false , token :payload,isAuth:true}
        case LOGIN_FAIL :
            return {...state , loading : false , errors : payload }
        default:
            return state
    }
}
export default userReducer ;