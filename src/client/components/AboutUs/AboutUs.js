import React from "react";
import "./AboutUs.css";
import foodshare from "../../assets/images/foodshare.png";

const Aboutus = () => {
  return (
    <div className="about">
      <h1>SHARING IS CARING #getMealSharingApp!</h1>
      <img src={foodshare} alt="food Sharing"/>
      <h4>
        Whether it’s fruit, vegetables, or dairy, there’s a lot of food waste in
        the world each day. Luckily, many new food sharing apps are working to
        provide solutions!
      </h4>
    </div>
  );
};

export default Aboutus;
