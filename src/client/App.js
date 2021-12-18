import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Meals from "./components/Meals/Meals";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import AddMeal from "./components/AddMeal/AddMeal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [meals, setMeals] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
        console.log(data);
      });
  }, []);
  return (
        <Router>
          <Route exact path="/">
            <Header/>
            <Home meals={meals} />
            <Footer/>
          </Route>
          <Route exact path="/meals">
          <Header/>
            <Meals meals={meals} />
            <Footer/>
          </Route>
          <Route exact path="/add-meal">
          <Header/>
            <AddMeal />
            <Footer/>
          </Route>
          <Route exact path="/about-us">
          <Header/>
            <AboutUs />
            <Footer/>
          </Route>
          <Route exact path="/lol">
            <p>lol</p>
          </Route>
          <Route exact path="/test-component">
            <TestComponent></TestComponent>
          </Route>
        </Router>
      
  );
}

export default App;
