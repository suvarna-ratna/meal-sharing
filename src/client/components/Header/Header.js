import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li className="float"><Link to="/"  className="link active" >Meal Sharing App</Link></li>
        <li>
          <Link to="/meals" className="link">Meals</Link>
        </li>
        <li>
          <Link to="/add-meal" className="link">Add Meal</Link>
        </li>
        <li>
          <Link to="/about-us" className="link">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
