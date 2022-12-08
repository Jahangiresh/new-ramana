import React from "react";
import { TfiEmail } from "react-icons/tfi";
import "../assets/css/homepagebutton.scss";
import { useNavigate } from "react-router-dom";
const HomepageButton = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/contact")}
      className="homepage__title__button"
    >
      <span className="span__icon">
        <TfiEmail />
      </span>
      <span className="homepage__title__button__text">
        stay up to date with us
      </span>{" "}
      <span className="span__arrow">
        <svg
          width="35"
          height="12"
          viewBox="0 0 35 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.6766 6.53033C34.9694 6.23744 34.9694 5.76256 34.6766 5.46967L29.9036 0.696699C29.6107 0.403806 29.1358 0.403806 28.8429 0.696699C28.55 0.989593 28.55 1.46447 28.8429 1.75736L33.0856 6L28.8429 10.2426C28.55 10.5355 28.55 11.0104 28.8429 11.3033C29.1358 11.5962 29.6107 11.5962 29.9036 11.3033L34.6766 6.53033ZM0 6.75H34.1462V5.25H0V6.75Z"
            fill="#DAD9D6"
          />
        </svg>
      </span>
    </div>
  );
};

export default HomepageButton;
