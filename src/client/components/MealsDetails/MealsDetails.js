import React, { useState } from "react";
import { useParams } from "react-router-dom";
import postData from "../postData";
import "./MealsDetails.css";
import Moment from 'moment';

const initialValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
  noOfReservations: "",
};
const date = Moment(new Date()).format('YYYY-MM-DD');

const MealsDetails = (props) => {
  const { id } = useParams();
  const meal = props.meals.filter((m) => m.id == Number(id))[0];
  const [show, setShow] = useState(false);
  const [inputValues, setInputValues] = useState(initialValues);

  // Input OnChange function
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  //on submit function
  async function onSubmit(e) {
    e.preventDefault();
    const reservation = {
      contact_name: inputValues.fullName,
      contact_email: inputValues.email,
      contact_phonenumber: inputValues.phoneNumber,
      number_of_guests: inputValues.noOfReservations,
      created_date: date,
      meal_id: meal.id,
    };

    //booking reservation
    try {
      await postData("/api/reservations", reservation);
      const messagge = `Thank You, Your Reservation Booked`;
      alert(messagge);
    } catch {
      alert("Your reservation is not booked...");
      throw new Error("Your reservation is not booked...");
    }
    //making inputs empty
    setInputValues(initialValues);
    setShow(false);
  }
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
      <button onClick={()=>setShow(true)}>RESERVE</button>
      <div>
      {show && <form onSubmit={onSubmit}>
      <div>
  <label htmlFor="fullname">Full Name:</label>
  <input type="text" id="fullname" name="fullName" value={inputValues.fullName}
            required
            onChange={handleOnChange}/><br/><hr/></div>
            <div>
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" value={inputValues.email}
            required
            onChange={handleOnChange}/><br/><hr/></div>
            <div>
  <label htmlFor="phone">Phone Number</label>
  <input type="number" id="phone" name="phoneNumber" value={inputValues.phoneNumber}
            required
            onChange={handleOnChange}/><br/><hr/></div>
            <div>
  <label htmlFor="No_reservations">No. of Reservations:</label>
  <input type="number" id="No_reservations" name="noOfReservations" value={inputValues.noOfReservations}
            required
            onChange={handleOnChange}/><br/><hr/></div>

  <button type="submit">Add Reservation</button>
</form>}
</div>
    </div>
  );
};

export default MealsDetails;
