import React from "react";
import { useParams } from "react-router-dom";
import "./MealsDetails.css";

const MealsDetails = (props) => {
  const { id } = useParams();
  const meal = props.meals.filter((m) => m.id == Number(id))[0];
  return (
    <div className="mealDetails">
      <h1>Meal-Details</h1>
      {meal && <>
      <p>Title: <span>{meal.title}</span></p>
      <p>Description: <span>{meal.description}</span></p>
      <p>price: <span>{meal.price}</span></p>
      <p>location: <span>{meal.location}</span></p>
      <p>when: <span>{meal.when.slice(0,10)}</span></p>
      <p>Maximum Reservations: <span>{meal.max_reservations}</span></p>
      </>}
    </div>
  );
};

export default MealsDetails;
