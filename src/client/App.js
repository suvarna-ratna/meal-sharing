import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Meals from "./components/Meals/Meals";
import Home from "./components/Home/Home";

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
        <Home meals={meals} />
      </Route>
      <Route exact path="/meals">
        <Meals meals={meals} />
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
