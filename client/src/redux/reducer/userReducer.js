import { REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionTypes";

const initialState= {
    loading: true,
    token : null,
    users:null,
    errors: null
}

const userReducer=(state=initialState, {type,payload}) =>{
    switch (type) {
        case REGISTER:
            return {...state, loading:false}
        case REGISTER_SUCCESS:
            return {...state,loading:false,users: payload}
        case REGISTER_FAIL:
            return {...state, loading:false,errors:payload}
        default:
            return state
    }
}
export default userReducer ;