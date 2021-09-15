import React from 'react'
import { addToCart } from '../../../redux/actions/carAction';
import './pizzaCardUser.css'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const PizzaCard = ({pizza}) => {
    const {foods} = useSelector(state => state.foodReducer)
    const dispatch = useDispatch()

    
    // console.log(pizza.avatar)
    return (
        <div className="container">
            <div className="pizza-img">
            <Link to=''><img src={`http://localhost:5000/${pizza.avatar}`} alt={pizza.foodName} /></Link>
            </div>
            <div className="pizza-details">
                <h3>{pizza.foodName}</h3>
                <p>{pizza.description}</p>
                <div className="buttons">
                    <span className="price">{pizza.price} Dt</span>
                    <button className="btn cart" onClick={()=>dispatch(addToCart(pizza._id))} > buy now</button>
                    <button className="btn bookmark"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>

            </div>
        </div>
    )
}

export default PizzaCard