import React from 'react';
import { Link } from 'react-router-dom';
import "./Meals.css";

const Meals = (props) => {
    return (
        <div className="meals">
            <h1>Meals</h1>
            <ul>
      {props.meals.map((meal)=>
          <li key={meal.id}>
              <p>Title: {meal.title}</p>
              <p>Description: {meal.description}</p>
              <p>price: {meal.price}</p>
              <Link to={`/meals/${meal.id}`}><button>Details</button></Link>
          </li>
      ) }
     </ul>
     
        </div>
    );
}

export default Meals;