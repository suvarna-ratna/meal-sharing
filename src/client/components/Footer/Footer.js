import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>About Us</li>
        <li>
        <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
