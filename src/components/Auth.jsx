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

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mediaMatch = window.matchMedia("(max-width: 576px)");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo, setUserinfo } = useContext(StoreContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      setUserinfo(localStorage.setItem("userInfo", JSON.stringify({ data })));
      console.log("sa");
    } catch (err) {
      console.log("sasda");
    }
  };

  return (
    <>
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
          {isRegister ? (
            <form onSubmit={submitHandler} method="POST">
              <div className="cart__body ">
                <h2 className="cart__body__h">log in</h2>

                <div className="cart__body__email">
                  <label htmlFor="email">email address</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth__input"
                    type="text"
                    id="email"
                  />
                </div>
                <div className="cart__body__email">
                  <label htmlFor="password">password</label>
                  <input
                    className="auth__input"
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="cart__body__reset">
                  <div className="cart__body__reset__remember">
                    <label htmlFor="remember">remember me</label>{" "}
                    <input name="remember" id="remember" type="checkbox" />
                  </div>
                  <span>reset password</span>
                </div>

                <div className="cart__body__button">
                  <button
                    onClick={submitHandler}
                    className="cart__body__button__btn"
                  >
                    log in
                  </button>

                  <div className="register__button">
                    <span>dont't have an account</span>
                    <button
                      onClick={() => setIsRegister((value) => !value)}
                      className="register__button__register"
                    >
                      register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <form>
              <div className="cart__body ">
                <h2 className="cart__body__h">register</h2>
                <div className="cart__body__email">
                  <label htmlFor="name">full name</label>
                  <input className="auth__input" type="text" id="name" />
                </div>
                <div className="cart__body__email">
                  <label htmlFor="email">email address</label>
                  <input className="auth__input" type="text" id="email" />
                </div>
                <div className="cart__body__email">
                  <label htmlFor="password">password</label>
                  <input
                    className="auth__input"
                    type="password"
                    id="password"
                  />
                </div>
                <div className="cart__body__email">
                  <label htmlFor="birthdate">birth date</label>
                  <input
                    className="auth__input"
                    type="password"
                    id="birthdate"
                  />
                </div>
                <div className="cart__body__email">
                  <label htmlFor="phonenumber">phone number</label>
                  <input
                    className="auth__input"
                    type="password"
                    id="phonenumber"
                  />
                </div>
                <div className="cart__body__accept">
                  <div className="cart__body__reset__accept__checkbox">
                    <label htmlFor="remember">join our newsletter</label>{" "}
                    <input name="remember" id="remember" type="checkbox" />
                  </div>
                  <div className="cart__body__reset__accept__checkbox">
                    <label htmlFor="remember">
                      agree to the terms and conditions
                    </label>{" "}
                    <input name="remember" id="remember" type="checkbox" />
                  </div>
                </div>

                <div className="cart__body__button">
                  <div className="register__button">
                    <button className="register__button__register">
                      register
                    </button>
                    <button
                      onClick={() => setIsRegister((value) => !value)}
                      className="register__button__register"
                    >
                      login
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
