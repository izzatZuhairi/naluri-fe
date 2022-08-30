import React, { useEffect, useState } from "react";
import "./home.css";
import sun from "../assets/sun.png";
import pi from "../assets/pi.png";
import { Button } from "@mui/material";
import axios from "axios";
import BigNumber from "bignumber.js";

export const Home = () => {
  const [piVal, setPiVal] = useState<string>("0");
  const radiusOfTheSun = "696340";

  useEffect(() => {
    if (piVal === "0") {
      axios
        .get("http://localhost:4500/api/calc-pi-async", {
          params: { keepVal: true },
        })
        .then((val) => {
          setPiVal(val?.data?.data);
        });
    }
  }, [piVal]);

  const calcSunCir = (rad: string) => {
    const radius = new BigNumber(rad);
    const cirSun = radius.times(piVal).times(2);
    return cirSun.toFormat(12);
  };

  return (
    <div className="homepage">
      <div className="top-part">
        <div className="sun-img sun-img-animation">
          <img src={sun} />
        </div>
        <div className="info-cont">
          <div className="pi-img-container">
            <div className="pi-img-cont">
              <img src={pi} className="pi-img " />
            </div>
            <div className="h3-top-cont">
              <h3 className="h3-top">~</h3>
            </div>
            <div className="div-top-cont">
              {/* <h3 className="h3-top">{piVal}</h3> */}
              <div className="div-top">{piVal}</div>
            </div>
          </div>
          <div className="pi-img-container">
            <div className="two-pi-r">
              <div>r</div>
              <div className="cir-sun">
                {" "}
                ~ {BigNumber(radiusOfTheSun).toFormat()} km
              </div>
            </div>
          </div>
          <div className="pi-img-container">
            <div className="two-pi-r">
              <div>2πr</div>
              <div className="cir-sun"> ~ {calcSunCir(radiusOfTheSun)} km</div>
            </div>
          </div>
        </div>
        <div className="footer-btn">
          <Button
            className="button"
            variant="contained"
            onClick={() => {
              axios.get("http://localhost:4500/api/reset-pi").then((val) => {
                if (val.data) {
                  axios
                    .get("http://localhost:4500/api/calc-pi-async")
                    .then((val) => {
                      setPiVal(val?.data?.data);
                    });
                }
              });
            }}
          >
            Reset pi value
          </Button>
          <Button
            className="button"
            variant="contained"
            onClick={() => {
              axios
                .get("http://localhost:4500/api/calc-pi-async")
                .then((val) => {
                  // console.log(val, "value????");
                  setPiVal(val?.data?.data);
                });
            }}
          >
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
