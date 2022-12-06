import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/nothingpage.scss";
import bgImage from "../assets/images/unsplash_hCG34GSdYTA.jpg";
const NothingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="nothingpage">
      <img src={bgImage} alt="" />

      <div className="nothingpage__container container ">
        <div className="nothingpage__container__cover col-6">
          <span className="nothing__span">
            sorry there is nothing on this page
          </span>
        </div>
        <div className="nothingpage__container__btns col-6">
          <span className="btn__span">see other pages</span>
          <button
            onClick={() => navigate("/")}
            className="nothingpage__container__btns__button "
          >
            home page{" "}
            <svg
              width="35"
              height="12"
              viewBox="0 0 35 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.6766 6.53033C34.9694 6.23744 34.9694 5.76256 34.6766 5.46967L29.9036 0.696699C29.6107 0.403806 29.1358 0.403806 28.8429 0.696699C28.55 0.989593 28.55 1.46447 28.8429 1.75736L33.0856 6L28.8429 10.2426C28.55 10.5355 28.55 11.0104 28.8429 11.3033C29.1358 11.5962 29.6107 11.5962 29.9036 11.3033L34.6766 6.53033ZM0 6.75H34.1462V5.25H0V6.75Z"
                fill="#363636"
              />
            </svg>
          </button>
          <button
            onClick={() => navigate("/about")}
            className="nothingpage__container__btns__button"
          >
            about us
            <svg
              width="35"
              height="12"
              viewBox="0 0 35 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.6766 6.53033C34.9694 6.23744 34.9694 5.76256 34.6766 5.46967L29.9036 0.696699C29.6107 0.403806 29.1358 0.403806 28.8429 0.696699C28.55 0.989593 28.55 1.46447 28.8429 1.75736L33.0856 6L28.8429 10.2426C28.55 10.5355 28.55 11.0104 28.8429 11.3033C29.1358 11.5962 29.6107 11.5962 29.9036 11.3033L34.6766 6.53033ZM0 6.75H34.1462V5.25H0V6.75Z"
                fill="#363636"
              />
            </svg>
          </button>{" "}
          <button
            onClick={() => navigate("/contact")}
            className="nothingpage__container__btns__button"
          >
            contact
            <svg
              width="35"
              height="12"
              viewBox="0 0 35 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.6766 6.53033C34.9694 6.23744 34.9694 5.76256 34.6766 5.46967L29.9036 0.696699C29.6107 0.403806 29.1358 0.403806 28.8429 0.696699C28.55 0.989593 28.55 1.46447 28.8429 1.75736L33.0856 6L28.8429 10.2426C28.55 10.5355 28.55 11.0104 28.8429 11.3033C29.1358 11.5962 29.6107 11.5962 29.9036 11.3033L34.6766 6.53033ZM0 6.75H34.1462V5.25H0V6.75Z"
                fill="#363636"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NothingPage;
