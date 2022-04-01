import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Meal.css";

const Meal = (props) => {
  const { strMeal, strArea, strInstructions, strMealThumb, idMeal } = props.meal;

  const navigate = useNavigate();

  const showMealDetails = () =>{
      const path = `/MealDetail/ ${strInstructions}`;
      navigate(path);
  }

  return (
    <div className="meal bg-slate-300 rounded-xl p-3">
      <img className="rounded-xl" src={strMealThumb} alt="" />
      <h4 className="text-2xl font-medium my-2">Name: {strMeal}</h4>
      <h4>Area: {strArea}</h4>
      {/* <p>{strInstructions.slice(0, 80)}</p> */}
      <Link className="bg-orange-400 px-3 py-1 font-medium rounded my-2 hover:bg-rose-500" to={'/MealDetail/'+ idMeal}>Show Details</Link>
      <button onClick={showMealDetails} className="bg-blue-400 px-6 py-1 font-medium rounded my-2 mx-2  hover:bg-rose-500">Detail</button>
    </div>
  );
};

export default Meal;
