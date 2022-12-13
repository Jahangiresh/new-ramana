import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../assets/css/cart.scss";
import { Link } from "react-router-dom";
import ShoeImg from "../assets/images/shoeWomen.png";

import { FiGlobe } from "react-icons/fi";
import { BsBag, BsHeart, BsSearch, BsBagFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { ProductContext } from "../ProductContext";
import { useContext } from "react";

function OffCanvasExample({ name, ...props }) {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeHandler = (item) => {
    let cart = [];
    cart = cartItems.filter((c) => c.id !== item.id);
    setCartItems(cart);
    console.log(cart);
  };
  return (
    <>
      <span onClick={handleShow}>
        <BsBag />
      </span>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <div className="cart">
          <div className="cart__header ">
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
                <BsBagFill />
              </Link>
              <Link className="cart__header__icons__li">
                <AiOutlineUser />
              </Link>
              <Link className="cart__header__icons__li">
                <FiGlobe />
              </Link>
            </ul>
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
                <button className="cart__body__total__button__btn">
                  checkout
                </button>
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
