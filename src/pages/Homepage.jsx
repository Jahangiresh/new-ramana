import React from "react";
import cover1 from "../assets/images/unsplash_hCG34GSdYTA.jpg";
import cover2 from "../assets/images/Rectangle43.png";
import coverRotate from "../assets/images/coverrotate.png";

import cover3 from "../assets/images/bag.png";
import cover4 from "../assets/images/Rectangle57.png";
import cover5 from "../assets/images/Rectangle49.png";
import { useNavigate } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import "../assets/css/homepage.scss";
import HomepageButton from "../components/HomepageButton";
const Homepage = () => {
  const navigate = useNavigate();
  const mediaMatch = window.matchMedia("(max-width: 576px)");

  console.log(mediaMatch.matches);
  return (
    <>
      <div className="homepage">
        <div className="homepage__cover">
          <img src={cover1} alt="" />
          <div className="homepage__cover__title">
            <h1>
              ramana <br /> castle
            </h1>
            <HomepageButton />
          </div>
        </div>
        <div className="homepage__footwear__cover">
          {mediaMatch.matches ? (
            <img src={coverRotate} alt="" />
          ) : (
            <img src={cover2} alt="" />
          )}

          <div className="homepage__footwear__cover__title">
            <h1>footwear</h1>
            <p>made just for you</p>
          </div>
          <div className="homepage__footwear__cover__footer">
            <div
              onClick={() => navigate("/shop")}
              className="homepage__footwear__cover__footer__left col-6"
            >
              menswear
            </div>
            <div
              onClick={() => navigate("/womenshop")}
              className="homepage__footwear__cover__footer__right col-6"
            >
              womenswear
            </div>
          </div>
        </div>
        <div className="homepage__footwear__cover">
          <img style={{ objectPosition: "left" }} src={cover3} alt="" />
          <div className="homepage__footwear__cover__title">
            <h1>handbags</h1>
            <p>made just for you</p>
          </div>
          <div className="homepage__footwear__cover__footer">
            <div
              onClick={() => navigate("/shop")}
              className="homepage__footwear__cover__footer__left col-6"
            >
              menswear
            </div>
            <div
              onClick={() => navigate("/womenshop")}
              className="homepage__footwear__cover__footer__right col-6"
            >
              womenswear
            </div>
          </div>
        </div>
        <div className="homepage__footwear__cover">
          <img src={cover4} alt="" />
          <div className="homepage__footwear__cover__title">
            <h1>accessories</h1>
            <p>made just for you</p>
          </div>
          <div className="homepage__footwear__cover__footer">
            <div
              onClick={() => navigate("/shop")}
              className="homepage__footwear__cover__footer__left col-6"
            >
              menswear
            </div>
            <div
              onClick={() => navigate("/womenshop")}
              className="homepage__footwear__cover__footer__right col-6"
            >
              womenswear
            </div>
          </div>
        </div>
        <div className="homepage__footwear__cover">
          <img src={cover5} alt="" />
          <div className="homepage__footwear__cover__title">
            <h1>kidswear</h1>
            <p>made just for you</p>
          </div>
          <div className="homepage__footwear__cover__footer">
            <div
              onClick={() => navigate("/womenshop")}
              className="homepage__footwear__cover__footer__left col-6"
            >
              girls
            </div>
            <div
              onClick={() => navigate("/shop")}
              className="homepage__footwear__cover__footer__right col-6"
            >
              boys
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
