import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Meal Sharing App</h4>
  	 			<ul>
  	 				<li><Link to="/" className="link">Home</Link></li>
  	 				<li><Link to="/about-us" className="link">About</Link></li>
  	 				<li><Link to="/meals" className="link">Pricing</Link></li>
  	 				<li><Link to="/meals" className="link">Privacy Policy</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get Help</h4>
  	 			<ul>
  	 				<li><Link to="/meals" className="link">Feedback</Link></li>
  	 				<li><Link to="/meals" className="link">Blog</Link></li>
  	 				<li><Link to="/meals" className="link">Contact</Link></li>
  	 				<li><Link to="/meals" className="link">Reviews</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><Link to="/meals" className="link">HYF Copenhagen, 1111 abcde</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
           <Link to="/meals" className="link"><FaGithub /></Link>
           <Link to="/meals" className="link"><FaInstagram/></Link>
           <Link to="/meals" className="link"><FaLinkedin/></Link>
           <Link to="/meals" className="link"><FaFacebook/></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
	   <div className="copyright"> © copyright@2021:  website developed by Suvarnaratna</div>
  </footer>
  </div>
  );
};

export default Footer;
