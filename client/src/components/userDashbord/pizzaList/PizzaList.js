import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFood } from "../../../redux/actions/foodActions";
import PizzaCard from "../pizzaCard/PizzaCard";

const PizzaList = () => {
  const { loading, foods } = useSelector((state) => state.foodReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFood());
  }, [dispatch]);
  // console.log(foods);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div style={{display :"flex" , flexDirection:"row" ,flexWrap:"wrap"}}>
          {foods.map((pizza) => (
            <PizzaCard pizza={pizza} key={pizza._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PizzaList;