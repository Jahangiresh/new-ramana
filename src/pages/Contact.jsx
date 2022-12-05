import React from "react";
import contactImg from "../assets/images/cntct.png";
import "../assets/css/checkout.scss";
import "../assets/css/contact.scss";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate=useNavigate()
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
              Ünvan <br /> Aşıq Molla Cümə 44, Bakı, Azerbaycan <br />
              <br /> Bizimlə əlaqə <br /> Nömrə : +99412 310 52 04 / 05 <br />
              Telefon: +99455 310 52 04 / 05 <br />
              <br /> E-Poçt adresi <br />
              info@ramana.az <br />
              <br /> İş vaxtları <br /> Həftəiçi : 09:00 - 18:00 Həftəsonu :
              10:00 - 21:00 Sosial mediayada biz:
            </span> <br />
            <button onClick={()=>navigate('/branches')} className="our__branches">our branches</button>
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
