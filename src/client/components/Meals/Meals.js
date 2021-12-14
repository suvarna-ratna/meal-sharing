import React from 'react';
import "./Meals.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Meals = (props) => {
    return (
        <div className="meals"><Header/>
            <h1>Meals</h1>
            <ul>
      {props.meals.map((meal)=>
          <li key={meal.id}>
              <p>Title: {meal.title}</p>
              <p>Description: {meal.description}</p>
              <p>price: {meal.price}</p>
          </li>
      ) }
     </ul>
            <Footer/>
        </div>
    );
}

export default Meals;
