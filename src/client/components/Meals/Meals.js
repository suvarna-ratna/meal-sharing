import React from 'react';
import { Link } from 'react-router-dom';
import "./Meals.css";

const Meals = (props) => {
    const picsArray=[]                              
    return (
        <div className="meals">
            <h1>Meals</h1>
            <ul>
      {props.meals.map((meal)=>
          <li key={meal.id}>
              <p>Title: <span>{meal.title}</span></p>
              <p>Description: <span>{meal.description}</span></p>
              <p>Price: <span>{meal.price}</span></p>
              <Link to={`/meals/${meal.id}`}><button>Details</button></Link>
              <Link to={`/meals/${meal.id}`}><button>Reserve</button></Link>

          </li>
      ) }
     </ul>
     
        </div>
    );
}

export default Meals;
