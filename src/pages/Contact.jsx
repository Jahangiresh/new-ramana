import React from "react";
import contactImg from "../assets/images/cntct.png";
import "../assets/css/checkout.scss";
import "../assets/css/contact.scss";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, contactInfo: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

const Contact = () => {
  const [{ contactInfo, error, loading }, dispatch] = useReducer(reducer, {
    contactInfo: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    const getContactInfo = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const resp = await axios.get("https://irp.ramanacastle.com/api/elaqe");
        console.log(resp.data.data);
        dispatch({ type: "FETCH_SUCCESS", payload: resp.data.data });
      } catch (err) {
        toast.error("error");
        dispatch({ type: "FETCH_FAIL" });
      }
    };
    getContactInfo();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="contact">
      <div className="contact__cover  ">
        <div className="contact__cover__container container">
          <h1>
            get in <br /> touch
          </h1>
          <img src={contactImg} alt="" />
        </div>
      </div>
      <div className="contact__content container">
        <h3>store locations</h3>
        <div className="contact__content__row row">
          <div className="contact__content__row__info col-4">
            <h4>our contacts</h4>
            <span>
              Ünvan <br /> {contactInfo.address} <br />
              <br /> Bizimlə əlaqə <br /> Nömrə : {contactInfo.phone_1} <br />
              Telefon: {contactInfo.phone_2}
              <br />
              <br /> E-Poçt adresi <br />
              {contactInfo.email} <br />
              <br /> İş vaxtları <br /> Həftəiçi :{contactInfo.weekdays}{" "}
              Həftəsonu :{contactInfo.weekend}Sosial mediayada biz:
              {contactInfo.instagram}
              {contactInfo.facebook}
              {contactInfo.tiktok}
              {contactInfo.linkedin}
            </span>{" "}
            <br />
            <button
              onClick={() => navigate("/branches")}
              className="our__branches"
            >
              our branches
            </button>
          </div>

          <div className="contact__content__row__inputs col-8">
            <div className="contact__content__row__inputs__input">
              <label className="contact__label" htmlFor="fullname">
                fullname
              </label>
              <input
                className="contact__input"
                type="name"
                name=""
                id="fullname"
              />
            </div>
            <div className="contact__content__row__inputs__input">
              <label className="contact__label" htmlFor="email">
                email address
              </label>
              <input className="contact__input" type="email" id="email" />
            </div>
            <div className="contact__content__row__inputs__input">
              <label className="contact__label" htmlFor="text">
                your message
              </label>

              <textarea
                className="text__input"
                id="text"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
