import React from 'react'
import './pizzaCardUser.css'
const PizzaCard = ({pizza}) => {
    console.log(pizza)
    return (
        <div className="container">
            <div className="pizza-img">
            <img src="../../../../../backend/uploads/1630846856033.png" />
            </div>
            <div className="pizza-details">
                <span>{pizza.foodName}</span>
                <p>{pizza.description}</p>
                <div className="buttons">
                    <span className="price">{pizza.price} Dt</span>
                    <button className="btn cart"> buy now</button>
                    <button className="btn bookmark"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>

            </div>
        </div>
    )
}

export default PizzaCard