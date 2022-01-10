import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import postData from "../postData";
import "./MealReviews.css";
import Moment from 'moment';
import Pics from "../Meals/Pics";
import Nigiri from "../../assets/images/pics/Nigiri.png";
import Stars from 'react-stars-display';

const initialValues = {
    title: "",
    description: "",
    stars: "",
  };
  const date = Moment(new Date()).format('YYYY-MM-DD');

const MealsReviews = (props) => {
  const { id } = useParams();
  const index = props.meals.map((m)=>m.id).indexOf(Number(id));
  const meal = props.meals.filter((m,i) => m.id == Number(id))[0];
  const [show, setShow] = useState(false);
  const [inputValues, setInputValues] = useState(initialValues);
const reviews = props.reviews.filter((r)=>r.meal_id==id);
  // Input OnChange function
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  //on submit function
  async function onSubmit(e) {
    e.preventDefault();
    const review = {
      title: inputValues.title,
      description: inputValues.description,
      stars: inputValues.stars,
      created_date: date,
      meal_id: meal.id,
    };

    //adding review
    try {
      await postData("/api/reviews", review);
      const messagge = `Thank You, Your review Added`;
      alert(messagge);
    } catch {
      alert("Your review is not Added...");
      throw new Error("Your review is not Added...");
    }
    //making inputs empty
    setInputValues(initialValues);
    setShow(false);
  }
  return (
    <div className="mealReviews">
      <h1>Meal-Details</h1>
      <img src={Pics[index] || Nigiri} alt='foodpic'/>
      {meal && <>
      <div>Title: <span>{meal.title}</span></div>
      <div>Description: <span>{meal.description}</span></div>
      <div>price: <span>{meal.price}</span></div>
      <div>location: <span>{meal.location}</span></div>
      <div>when: <span>{meal.when.slice(0,10)}</span></div>
      <div>Maximum Reservations: <span>{meal.max_reservations}</span></div>
      </>}
      <div><ul>
        {reviews.map((review, i) => (
          <li key={(review.id, i)}>
            <div className="column card">
              <div className="card-img">
                <div className="container">
                  <h3 className="title">
                     <span>{review.title}</span>
                  </h3><hr></hr>
                  <p>
                    Description: <span>{review.description}</span>
                  </p><hr></hr>
                  <p>
                  <Stars
stars={review.stars}
size={17} //optional
spacing={2} //optional
fill='#fff' //optional
/>
                  </p><hr></hr>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul></div>
      <button onClick={()=>setShow(true)}>ADD REVIEW</button>
      <p className="reserve">
                    <Link to={`/meals/${meal.id}`}>
                      <button>Go To Reserve Page</button>
                    </Link>
                  </p>
      <div>
      {show && <> <form onSubmit={onSubmit} className="ReviewForm">
      <div >
  <label htmlFor="title">Title:</label>
  <input type="text" id="title" name="title" value={inputValues.title}
            required
            onChange={handleOnChange}/><br/></div>
            <div>
  <label htmlFor="description">description:</label>
  <input type="text" id="description" name="description" value={inputValues.description}
            required
            onChange={handleOnChange}/><br/></div>
            <div>
  <label htmlFor="stars">Stars:</label>
  <input type="number" id="stars" name="stars" value={inputValues.stars}
            required
            onChange={handleOnChange} min='1' max='5'/><br/></div>

  <button type="submit">Add Review</button>
</form>
<button onClick={()=>setShow(false)}>Close Review</button></>
}

</div>
    </div>
  );
};

export default MealsReviews;
