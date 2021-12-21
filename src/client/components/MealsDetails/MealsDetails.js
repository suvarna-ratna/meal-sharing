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
      <form>
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" value="Full Name"/><br/>
  <label for="Email">Email:</label>
  <input type="email" id="email" name="email" value="Email@email.com"/><br/>
  <label for="PhoneNumber">Phone Number</label>
  <input type="Number" id="PhoneNumber" name="PhoneNumber" value="12345678"/><br/>
  <label for="No_reservations">No. of Reservations:</label>
  <input type="Number" id="No_reservations" name="No_reservations" value="1"/><br/>
  <input type="submit" value="Add Reservation"/>
</form>
    </div>
  );
};

export default MealsDetails;
