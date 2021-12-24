import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>write something here</p>
        <ul className="media">
          <li>
            <FaGithub />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaFacebook />
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy;2021 MealSharing . designed by @Suvarna</p>
      </div>
    </div>
  );
};

export default Footer;
