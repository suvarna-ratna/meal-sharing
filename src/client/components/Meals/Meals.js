import React from "react";
import { Link } from "react-router-dom";
import "./Meals.css";
import Nigiri from "../../assets/images/pics/Nigiri.png";

const Meals = (props) => {
  const picsArray = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKG9KKJ-FMZA1lx1gNj3KweqIB-toPrqYbw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMmteoUdhuYSpQCs8JMkJ89dKhvw4CaLuwg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiaynUbxzM2a2zx7DlsAXiw7dJo-zqsBrN0w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37jcwj1ki-xlSSojNd3r0Zco_u6aijFdAJw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpj3rV_BxqsOvJZ2RCtCCzBgQULXJxzoH54w&usqp=CAU",
  ];
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
