import React from "react";
import "../assets/css/header.scss";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Ramanalogo from "./RamanalogoBlack";
import { FiMenu } from "react-icons/fi";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div style={{ background: "#fff" }} className="header">
      <div className="header__container container">
        <div className="header__container__row row">
          <div className="header__container__row__logo col-3 d-block d-sm-none">
            <Button>
              <FiMenu style={{ color: "#363636" }} className="my__menu__icon" />
            </Button>
          </div>
          <div className="header__container__row__logo col-6">
            <Ramanalogo />
          </div>
          <div className="header__container__row__navs col-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
            <ul className="header__container__row__navs__icons">
              <li>
                <Link className="nav__icons__link">
                  <BsSearch style={{ color: "#363636" }} />
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
