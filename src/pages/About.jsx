import React from "react";
import aboutCover from "../assets/images/about.png";
import aboutBg from "../assets/images/about.png";

import "../assets/css/about.scss";
import { useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, aboutTitle: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

const About = () => {
  const [{ aboutTitle, error, loading }, dispatch] = useReducer(reducer, {
    aboutTitle: "",
    loading: true,
    error: false,
  });

  useEffect(() => {
    const getAbout = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const resp = await axios.get(
          "https://irp.ramanacastle.com/api/haqqimizda"
        );
        console.log(resp.data);
        dispatch({ type: "FETCH_SUCCESS", payload: resp.data.data });
      } catch (err) {
        toast.error("gelmedi");
        dispatch({ type: "FETCH_FAIL" });
      }
    };
    getAbout();
  }, []);

  return (
    <div className="about">
      <div className="about__cover  ">
        <div className="about__cover__container container">
          <h1>
            about <br /> ramana
          </h1>
          <img src={aboutCover} alt="" />
        </div>
      </div>
      <div className="about__content container">
        <h3>about us</h3>
        <div className="about__content__row row">
          <div className="about__content__row__left col-6 ">
            <p className="about__content__row__left__p">{aboutTitle.title_1}</p>
          </div>
          <div className="about__content__row__right col-6">
            <p className="about__content__row__right__p">
              {aboutTitle.description_1}
            </p>
          </div>
        </div>
      </div>
      <div className="about__under__content">
        <div className="about__under__content__container container">
          <div className="about__under__content__container__row row">
            <div className="about__under__content__container__row__left col-6">
              <h3 className="about__under__content__container__row__left__h">
                {aboutTitle.title_2}
              </h3>
            </div>
            <div className="about__under__content__container__row__right col-6">
              <p className="about__under__content__container__row__right__p">
                {aboutTitle.description_2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
