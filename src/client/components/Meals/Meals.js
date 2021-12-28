import React from "react";
import { Link } from "react-router-dom";
import "./Meals.css";
import Nigiri from "../../assets/images/pics/Nigiri.png";
import pics from './Pics';

const Meals = (props) => {
  const picsArray = pics;
  return (
    <div className="meals">
      <h1>Meals</h1>
      <div className="mealsRow">
      <ul>
        {props.meals.map((meal, i) => (
          <li key={(meal.id, i)}>
            <div className="column card">
              <div className="card-img">
                <img src={picsArray[i] || Nigiri} alt="food" />
                <div className="container">
                  <h3 className="title">
                     <span>{meal.title}</span>
                  </h3>
                  <p>
                    Description: <span>{meal.description}</span>
                  </p>
                  <p>
                    Price: <span>{meal.price}</span>
                  </p>
                  <p className="details">
                    <Link to={`/meals/${meal.id}`}>
                      <button >Details</button>
                    </Link>
                  </p>
                  <p className="reserve">
                    <Link to={`/meals/${meal.id}`}>
                      <button >Reserve</button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul></div>
    </div>
  );
};

export default Meals;
