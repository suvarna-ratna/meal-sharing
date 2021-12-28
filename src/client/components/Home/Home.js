import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import './Home.css';

const Home = () => {
  const [searchMeal, setSearchMeal] = useState("");
  const [meals, setMeals] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (searchMeal) {
      fetch(`/api/meals?title=${searchMeal}`)
        .then((res) => res.json())
        .then((data) => {
          setMeals(data);
        });
    }
  }, [searchMeal]);

  const onClick = (title) => {
    setSearchMeal(title);
    setDisplay(true);
  };

  return (
    <div className="homeimg">
      <div className="about">
        <h1 className="welcome"><span>Welcome To Meal Share!</span></h1>
        <div>
          <div className="search_input_box">
            {/* <FaSearch /> */}
            <input
              className="search_input"
              type="text"
              placeholder="search meal..."
              value={searchMeal}
              onChange={(e) => setSearchMeal(e.target.value)}
            />
          </div>

          {meals &&
            meals.map((meal) => {
              return (
                <div key={meal.id} className="search_meal_list">
                  {!display ? (
                    <div>
                      <li
                        className="search_meal"
                        onClick={() => onClick(meal.title)}
                      >
                        {meal.title}
                      </li>
                    </div>
                  ) : (
                    <div className="search_meal_box">
                      <h4>
                        <span>Meal Information</span>
                      </h4>
                      <h4>
                        <span>Meal Title:</span> {meal.title}
                      </h4>
                      <h4>
                        <span>Location: </span> {meal.location}
                      </h4>
                      <Link to={`meals/${meal.id}`}>
                        <button>More Details...</button>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Home;
