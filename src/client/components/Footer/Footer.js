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
  	 			<h4 >Address</h4>
				   <ul> 
  	 			
<li ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562.6390070022399!2d12.539740254828313!3d55.661930599559774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652539aed46bb31%3A0x352c940085c22f73!2sDISIE%20(Danish%20Institute%20for%20Sustainable%20Innovation%20%26%20Entrepreneurship)!5e0!3m2!1sda!2sdk!4v1623332383917!5m2!1sda!2sdk" className="location"></iframe>
</li></ul>
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
