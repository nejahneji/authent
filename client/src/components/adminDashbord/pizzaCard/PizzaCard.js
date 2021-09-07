import React from "react";
import { useDispatch } from "react-redux";
import { deletFood, getFood } from "../../../redux/actions/foodActions";
import EditPizza from "../editPizza/EditPizza";
import "./pizzaCardAdmin.css";
const PizzaCard = ({ pizza }) => {
  const dispatch = useDispatch();
  console.log(pizza);
  return (
    <div className="container">
      <div className="pizza-img">
        <img src="../../../../../backend/uploads/1630846856033.png" />
      </div>
      <div className="pizza-details">
        <span>{pizza.foodName}</span>
        <p>{pizza.description}</p>
        <span className="price">{pizza.price} Dt</span>
        <div className="params">
          <i
            class="fas fa-trash-restore fa-2x "
            onClick={() => {
              dispatch(deletFood(pizza._id));
              dispatch(getFood());
            }}
          ></i>
          <EditPizza pizza={pizza} />
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
