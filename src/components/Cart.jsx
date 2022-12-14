import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../assets/css/cart.scss";
import { Link, useNavigate } from "react-router-dom";
import ShoeImg from "../assets/images/shoeWomen.png";

import { FiGlobe } from "react-icons/fi";
import { BsBag, BsHeart, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { StoreContext } from "../StoreContext";
import { useContext } from "react";
import "../assets/css/header.scss";
import Ramanalogo from "./RamanalogoBlack";
import { FiMenu } from "react-icons/fi";
import Button from "@mui/material/Button";
function OffCanvasExample({ name, ...props }) {
  const { cartItems, setCartItems } = useContext(StoreContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeHandler = (item) => {
    let cart = [];
    cart = cartItems.filter((c) => c.id !== item.id);
    setCartItems(cart);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };
  const mediaMatch = window.matchMedia("(max-width: 576px)");
  const navigate = useNavigate();
  return (
    <>
      <span onClick={handleShow}>
        <BsBag />
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
                      <Button>
                        <FiMenu
                          style={{ color: "#363636" }}
                          className="my__menu__icon"
                        />
                      </Button>
                    </div>
                    <div
                      onClick={() => navigate("/")}
                      className="header__container__row__logo col-6"
                    >
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
                  <Link className="cart__header__ul__li" to="/shop">
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
          <div className="cart__body ">
            <h2 className="cart__body__h">your cart</h2>
            <div className="cart__body__products">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.id} className="cart__body__products__item">
                    <div className="cart__body__products__item__content">
                      <h3 className="cart__body__products__item__content__h">
                        {item.title}
                      </h3>
                      <span className="cart__body__products__item__content__span">
                        {item.materials}
                      </span>
                    </div>
                    <div className="cart__body__products__item__image">
                      <img src={ShoeImg} alt="" />
                      <span
                        onClick={() => removeHandler(item)}
                        className="cart__body__products__item__image__x"
                      >
                        x
                      </span>
                    </div>
                  </div>
                ))}
            </div>

            <div className="cart__body__total">
              <span className="cart__body__total__span">
                your total{" "}
                {cartItems.reduce((total, item) => +item.price + total, 0)} azn
              </span>
              <div className="cart__body__total__button">
                <Link
                  className="cart__body__total__button__btn__link"
                  to="checkout"
                >
                  <button
                    onClick={handleClose}
                    className="cart__body__total__button__btn"
                  >
                    checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas>
    </>
  );
}
function Cart() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default Cart;
