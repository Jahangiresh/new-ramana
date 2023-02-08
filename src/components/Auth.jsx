import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../assets/css/auth.scss";
import { Link } from "react-router-dom";

import { FiGlobe } from "react-icons/fi";
import { BsBag, BsHeart, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import "../assets/css/header.scss";
import Ramanalogo from "./RamanalogoBlack";
import { FiMenu } from "react-icons/fi";
import Button from "@mui/material/Button";
import axios from "axios";
import { useContext } from "react";
import { StoreContext } from "../StoreContext";
import toast, { Toaster } from "react-hot-toast";
import Register from "./Register";
import Signin from "./Login";
import { RiH1 } from "react-icons/ri";
import Profile from "./Profile";

function OffCanvasExample({ name, ...props }) {
  const mediaMatch = window.matchMedia("(max-width: 576px)");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isRegister, setIsRegister] = useState(true);

  const { userInfo, setUserinfo } = useContext(StoreContext);
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={true} />
      <span onClick={handleShow}>
        <AiOutlineUser />
      </span>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <div className="cart">
          <div className="cart__header ">
            {mediaMatch.matches ? (
              <div
                onClick={handleClose}
                style={{ background: "#fff" }}
                className="header"
              >
                <div className="header__container container">
                  <div className="header__container__row row">
                    <div className="header__container__row__logo col-3 d-block d-md-none">
                      <Button onClick={handleClose}>
                        <FiMenu
                          style={{ color: "#363636" }}
                          className="my__menu__icon"
                        />
                      </Button>
                    </div>
                    <div className="header__container__row__logo col-6">
                      <Link to="/">
                        <Ramanalogo />
                      </Link>
                    </div>
                    <div className="header__container__row__navs col-3 ">
                      <ul className="header__container__row__navs__icons">
                        <li>
                          <Link to="/search" className="nav__icons__link">
                            <BsSearch style={{ color: "#363636" }} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <ul className="cart__header__ul col-7" onClick={handleClose}>
                  <Link className="cart__header__ul__li" to="/products">
                    products
                  </Link>
                  <Link className="cart__header__ul__li" to="/about">
                    about us
                  </Link>
                  <Link className="cart__header__ul__li" to="/contact">
                    contact
                  </Link>
                </ul>
                <ul onClick={handleClose} className="cart__header__icons col-5">
                  <Link to="/search" className="cart__header__icons__li">
                    <BsSearch />
                  </Link>
                  <Link to="/likes" className="cart__header__icons__li">
                    <BsHeart />
                  </Link>
                  <Link className="cart__header__icons__li">
                    <BsBag />
                  </Link>
                  <Link className="cart__header__icons__li">
                    <AiOutlineUser />
                  </Link>
                  <Link className="cart__header__icons__li">
                    <FiGlobe />
                  </Link>
                </ul>
              </>
            )}
          </div>
          {userInfo ? (
            <Profile />
          ) : (
            <>
              {" "}
              {isRegister ? (
                <Register setIsRegister={setIsRegister} />
              ) : (
                <Signin setIsRegister={setIsRegister} />
              )}
            </>
          )}
        </div>
      </Offcanvas>
    </>
  );
}
function Login() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default Login;
