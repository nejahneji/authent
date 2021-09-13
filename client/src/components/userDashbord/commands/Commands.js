import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./commandItem.css";

import CommandItem from "./CommandItem";
import "./commands.css";
import { removeFromCart } from "../../../redux/actions/carAction";
const Commands = (id) => {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state) => state.cart);
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Addition</h2>
      {cartItems.map((pizza) => (<div className="cartitem">
          <div className="cartitem__image">
            <img src={pizza.avatar} alt={pizza.name} />
          </div>
          <Link className="cartitem__name">
            <p>{pizza.foodName}</p>
          </Link>
          <p className="cartitem__price">{pizza.price}Dt</p>
          <select className="cartitem__select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <i class="far fa-trash-alt fa-2x" onClick={()=> dispatch(removeFromCart(pizza._id))}></i>
        </div>))}
      
        
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>({cartItems.length})pizza</p>
          <p style={{display:"flex", marginLeft:"7rem"}}><h6>Total = </h6>{cartItems.reduce((a,c) => a + parseInt(c.price) , 0 )}Dt</p>
        </div>
        <div>
          <button>Purchase</button>
        </div>
      </div>
      <Link to="/UserDashbord"><button>Home</button></Link>
    </div>



  );
};

export default Commands;
