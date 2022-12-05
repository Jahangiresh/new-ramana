import React from "react";
import "../assets/css/footer.scss";
import logo from "../assets/images/logo.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/in.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__container__upper row">
          <div className="footer__container__upper__logo col-3">
            <img src={logo} alt="" />
          </div>
          <div className="footer__container__upper__navs col-7">
            <ul>
              <li>products</li>
              <li>about</li>
              <li>contact</li>
              <li>branches</li>
              <li>faq</li>
            </ul>
          </div>
          <div className="footer__container__upper__social col-2">
            <ul>
              <li>
                <img src={linkedin} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>

              <li>
                <img src={facebook} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__container__lower row">
          <div className="footer__container__lower__copywrite col-2">
            © 2022 ramana caste
          </div>
          <div className="footer__container__lower__subscribe col-8">
            <div className="footer__container__lower__subscribe__box">
              <span>
                <i className="fa-regular fa-envelope"></i>
              </span>
              <span>subscribe now:</span>
              <input
                className="footer__email"
                type="text"
                placeholder="enter your email"
              />
              <span>
                <i className="fa-solid fa-right-long"></i>
              </span>
            </div>
          </div>
          <div className="footer__container__lower__copywrite col-2">
            website by Dreamart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
