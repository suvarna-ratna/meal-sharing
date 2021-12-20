import React from "react";
import "./AboutUs.css";
import foodshare from "../../assets/images/foodshare.png";

const Aboutus = () => {
  return (
    <div className="about">
      <h4>Food sharing</h4>
      <img src={foodshare} alt="food Sharing"/>
      <h5>
        Whether it’s fruit, vegetables, or dairy, there’s a lot of food waste in
        the world each day. Luckily, many new food sharing apps are working to
        provide solutions!
      </h5>
      <hr />
      <p>SHARING IS CARING #getMealSharingApp!</p>
    </div>
  );
};

export default Aboutus;
