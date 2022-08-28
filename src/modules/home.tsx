import React from "react";
import "./home.css";
import sun from "../assets/sun.png";

export const Home = () => {
  const radiusOfTheSun = 696340;

  return (
    <div className="homepage">
      <div className="top-part">
        <img src={sun} />
      </div>
      <div className="bottom-part">request api</div>
    </div>
  );
};
