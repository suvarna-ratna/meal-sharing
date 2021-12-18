import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">Meal Sharing App</Link>
      </h1>
      <ul>
        <li>
          <Link to="/meals">Meals</Link>
        </li>
        <li>
          <Link to="/add-meal">Add Meal</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
