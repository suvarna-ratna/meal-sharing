import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = (props) => {
  return (
    <div className="home">
      <Header />
      <h1>Meal-sharing App</h1>
      <ul>
      {props.meals.map((meal)=>
          <li key={meal.id}>
              <p>Title: {meal.title}</p>
              <p>Description: {meal.description}</p>
              <p>price: {meal.price}</p>
          </li>
      ) }
     </ul>
      <Footer />
    </div>
  );
};

export default Home;
