import axios from "axios";
import { ADD, DELETE, EDIT, GET } from "../actionTypes";



export const addFood = (foodName,description,capacity,price) =>  async(dispatch) => {
    try {
        const newFood={foodName,description,capacity,price}
        let res= await axios.post('/food/add', newFood)
        dispatch =({
            type :ADD ,
            payload : res.data
        })
    } catch (error) {
        alert('post error')
    }
}
export const deletFood = (id) => async(dispatch) => {
    try {
        let res = await axios.delete(`/food/delete/${id}`)
        dispatch=({
            type: DELETE ,
            payload : res.data
        })
    } catch (error) {
        alert('delete error')
    }
}
export const editFood = (id,foodName,description,capacity,price) => async(dispatch) => {
    try {
        let editedFood = {foodName,description,capacity,price}
        let res = await axios.put(`/food/update/${id}`,editedFood)
        dispatch({
            type : EDIT,
            payload : res.data
        })
    } catch (error) {
        alert('edit error')
    }
}
export const getFood = () => async(dispatch) => {
    try {
       let res = await axios.get('/food/get')
       console.log(res)
       dispatch({
           type :GET ,
           payload : res.data
       })
    } catch (error) {
        alert('get error')
    }
}