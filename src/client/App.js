import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Meals from "./components/Meals/Meals";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import AddMeal from "./components/AddMeal/AddMeal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MealsDetails from "./components/MealsDetails/MealsDetails";

function App() {
  const [meals, setMeals] = React.useState([]);
  const [reviews, setrReviews] = React.useState([]);
  const [reservations, setReservations] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
        console.log(data);
      });
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((data) => {
        setrReviews(data);
        console.log(data);
      });
    fetch("/api/reservations")
      .then((response) => response.json())
      .then((data) => {
        setReservations(data);
        console.log(data);
      });
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home meals={meals} />
        </Route>
        <Route exact path="/meals">
          <Meals meals={meals} />
        </Route>
        <Route exact path="/meals/:id">
          <MealsDetails meals={meals} reservations={reservations}/>
        </Route>
        <Route exact path="/add-meal">
          <AddMeal />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        
        <Route exact path="/test-component">
          <TestComponent />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
