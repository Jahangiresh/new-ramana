import React from "react";
import "../assets/css/header.scss";
import { FiGlobe } from "react-icons/fi";
import {
  BsBag,
  BsHeart,
  BsHeartFill,
  BsSearch,
  BsBagFill,
} from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import Ramanalogo from "./Ramanalogo";
import Menuslider from "./Menuslider";
import { useState } from "react";
const Header = () => {
  const [bagActive, setBagActive] = useState(false);
  const [heartActive, setHeartActive] = useState(false);

  document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    window.pageYOffset > 10
      ? header.classList.add("header__active")
      : header.classList.remove("header__active");
  });
  return (
    <div
      style={{
        background: window.location.pathname === "/checkout" ? "black" : "",
      }}
      className="header "
    >
      <div className="header__container container">
        <div className="header__container__row row">
          <div className="header__container__row__logo col-3 d-block d-sm-none">
            <Menuslider />
          </div>
          <div className="header__container__row__logo col-6">
            <Link to="/">
              <Ramanalogo />
            </Link>
          </div>
          <div className="header__container__row__navs col-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
            <ul className="header__container__row__navs__ul">
              <li id="products">
                <Link className="nav__links">products</Link>
                <div className="products__hover">
                  <ul className="products__hover__ul">
                    <li id="men">
                      <Link to="/shop" className="nav__links">
                        men
                      </Link>
                    </li>

                    <div className="men__hover">
                      <ul className="men__hover__ul">
                        <li
                          style={{ fontWeight: "bold" }}
                          className="men__hover__ul__li"
                        >
                          footwear
                        </li>
                        <li className="men__hover__ul__li">loafers</li>
                        <li className="men__hover__ul__li">lace up shoes</li>
                        <li className="men__hover__ul__li">sandals</li>
                        <li className="men__hover__ul__li">moccasins</li>
                        <li className="men__hover__ul__li">winter boots</li>
                        <li className="men__hover__ul__li">leather shoes</li>
                      </ul>
                      <ul className="men__hover__ul ">
                        <li
                          style={{ fontWeight: "bold" }}
                          className="men__hover__ul__li"
                        >
                          handbags
                        </li>
                        <li className="men__hover__ul__li">mini bags</li>
                        <li className="men__hover__ul__li">backpacks</li>
                        <li className="men__hover__ul__li">laptop bags</li>
                        <li className="men__hover__ul__li">suit cases</li>
                        <li className="men__hover__ul__li">duffel bags</li>
                        <li className="men__hover__ul__li">strapless bags</li>
                      </ul>
                      <ul className="men__hover__ul ">
                        <li
                          style={{ fontWeight: "bold" }}
                          className="men__hover__ul__li"
                        >
                          accessories
                        </li>
                        <li className="men__hover__ul__li">wallets</li>
                        <li className="men__hover__ul__li">belts</li>
                        <li className="men__hover__ul__li">keychains</li>
                        <li className="men__hover__ul__li">watch bands</li>
                        <li className="men__hover__ul__li">headewear</li>
                        <li className="men__hover__ul__li">leathercases</li>
                      </ul>
                    </div>
                    <li>
                      <Link to="/womenshop" className="nav__links">
                        women
                      </Link>
                    </li>
                    <li>kids</li>
                  </ul>
                </div>
              </li>
              <li>
                <Link id="about" className="nav__links">
                  about
                </Link>
                <div className="about__hover">
                  <ul className="about__hover__ul">
                    <li className="about__hover__ul__li">about us</li>
                    <li className="about__hover__ul__li">our branches</li>
                    <li className="about__hover__ul__li">faq</li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/contact" className="nav__links">
                  contact
                </Link>
              </li>
            </ul>
            <ul className="header__container__row__navs__icons">
              <li
                // style={{
                //   display:
                //     window.location.pathname === "/search" ? "none" : "block",
                // }}
              >
                <Link to="/search" className="nav__icons__link">
                  <BsSearch />
                </Link>
              </li>
              <li
                onClick={() => setHeartActive((value) => !value)}
                className="d-none d-md-block"
              >
                <Link className="nav__icons__link">
                  {heartActive ? <BsHeartFill /> : <BsHeart />}
                </Link>
              </li>
              <li
                onClick={() => setBagActive((value) => !value)}
                className="d-none d-md-block"
              >
                <Link className="nav__icons__link">
                  {bagActive ? <BsBagFill /> : <BsBag />}
                </Link>
              </li>
              <li className="d-none d-md-block">
                <Link className="nav__icons__link">
                  <AiOutlineUser />
                </Link>
              </li>
              <li className="d-none d-md-block">
                <Link className="nav__icons__link">
                  <FiGlobe />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
