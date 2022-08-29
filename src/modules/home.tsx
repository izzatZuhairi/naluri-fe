import React from "react";
import "./home.css";
import sun from "../assets/sun.png";
import pi from "../assets/pi.png";
import { Button } from "@mui/material";

export const Home = () => {
  const radiusOfTheSun = "696,340";
  const piVal = "3.1415";
  const cirSun = "2,000,000";

  return (
    <div className="homepage">
      <div className="top-part">
        <div className="sun-img">
          <img src={sun} />
        </div>
        <div className="info-cont">
          <div className="pi-img-container">
            <div className="pi-img-cont">
              <img src={pi} className="pi-img" />
            </div>
            <div className="h3-top-cont">
              <h3 className="h3-top">~</h3>
            </div>
            <div>
              <h3 className="h3-top">{piVal}</h3>
            </div>
          </div>
          <div className="pi-img-container">
            <div className="two-pi-r">
              <div>r</div>
              <div className="cir-sun"> ~ {radiusOfTheSun} km</div>
            </div>
          </div>
          <div className="pi-img-container">
            <div className="two-pi-r">
              <div>2πr</div>
              <div className="cir-sun"> ~ {cirSun} km</div>
            </div>
          </div>
        </div>
        <div className="footer-btn">
          <Button className="button" variant="contained">
            Reset pi value
          </Button>
          <Button className="button" variant="contained">
            Calculate pi
          </Button>
        </div>
      </div>

      {/* <div className="bottom-part">
        <Button className="button" variant="contained">
          Reset pi value
        </Button>
        <Button className="button" variant="contained">
          Calculate pi
        </Button>
      </div> */}
    </div>
  );
};
