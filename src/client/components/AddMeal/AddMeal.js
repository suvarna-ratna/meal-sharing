import React, { useState } from "react";
import postData from "../postData";
import Moment from 'moment';
import "./AddMeal.css";
const initialValues = {
  title: "",
  location: "",
  description: "",
  maxReservations: "",
  when: "",
  price: "",
};
const date = Moment(new Date()).format('YYYY-MM-DD');
//adding Meal Component
const AddMeal = () => {
  const [inputValues, setInputValues] = useState(initialValues);
  
  // Input OnChange function
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  //on submit function
  async function onSubmit(e) {
    e.preventDefault();
    const meal = {
      title: inputValues.title,
      description: inputValues.description,
      location: inputValues.location,
      when: inputValues.when,
      max_reservations: inputValues.maxReservations,
      price: inputValues.price,
      created_date: date,
    };

    //posting a new meal
    try {
      await postData("/api/meals", meal);
      const messagge = `Thank You, Your Meal : ${meal.title} Added`;
      alert(messagge);
    } catch {
      alert("Your meal is not added...");
      throw new Error("Your meal is not added...");
    }
    //making inputs empty
    setInputValues(initialValues);
  }

  return (
    <div className="addMeal">
      <div>
        <h3>Intreseted to become a Host ?</h3>
        
        
      </div>
      <h3>Please provide details to add your meal</h3>
      <br></br>
      <hr/>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Meal Title* : </label>
          <input
            type="text"
            id="title"
            name="title"
            value={inputValues.title}
            required
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <label htmlFor="location">Location* : </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={inputValues.location}
            onChange={handleOnChange}
          ></input>
        </div>
        <div>
          <label htmlFor="when">Date & Time Of Hosting* : </label>
          <input
            type="date"
            id="when"
            name="when"
            required
            min={date}
            value={inputValues.when}
            onChange={handleOnChange}
          ></input>
        </div>
        <div>
          <label htmlFor="max_reservations">Max Reservations* : </label>
          <input
            type="number"
            id="max_reservations"
            min="0"
            name="maxReservations"
            required
            value={inputValues.maxReservations}
            onChange={handleOnChange}
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price* : </label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            step="5"
            value={inputValues.price}
            required
            onChange={handleOnChange}
          ></input>
        </div>
        <div>
          <label htmlFor="description" className="meal_description">
            Description* :{" "}
          </label>
          <textarea
            id="description"
            name="description"
            value={inputValues.description}
            required
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button type="submit">Add Meal</button>
      </form>
    </div>
  );
};
export default AddMeal;
