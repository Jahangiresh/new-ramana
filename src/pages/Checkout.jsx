import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { StoreContext } from "../StoreContext";

const Checkout = () => {
  const [fullname, setFullname] = useState(String);
  const [email, setEmail] = useState(String);
  const [address, setAddress] = useState(String);
  const [number, setNumber] = useState(Number);
  const { userInfo } = useContext(StoreContext);

  const { cartItems, setCartItems } = useContext(StoreContext);
  const removeHandler = (item) => {
    let cart = [];
    cart = cartItems.filter((c) => c.id !== item.id);
    setCartItems(cart);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };
  

  return (
    <div>
      <section className="main">
        <div className="main__container container ">
          <div className="main__container__checkout">
            <span className="main__container__checkout__span">checkout</span>
          </div>
          <div className="main__container__info row">
            <div className="main__container__info__box col-lg-3 col-md-3 col-6">
              <p>data of order</p>
              <span>13 may 2022</span>
            </div>
            <div className="main__container__info__box col-lg-3 col-md-3 col-6">
              <p>number of items</p>
              <span>3 items</span>
            </div>
            <div className="main__container__info__box col-lg-3 col-md-3 col-6">
              <p>name of buyer</p>
              <span>ali huseynov</span>
            </div>
            <div className="main__container__info__box col-lg-3 col-md-3 col-6">
              <p>delivery date</p>
              <span>15 may</span>
            </div>
          </div>
          <div className="main__container__orders">
            {cartItems &&
              cartItems.map((item) => (
                <div key={item.id} className="main__container__orders__row row">
                  <div className="main__container__orders__row__title col-6">
                    <p>
                      {item.title} - {item.price} azn
                    </p>
                    <span>{item.materials}</span>
                  </div>
                  <div className="main__container__orders__row__product col-5">
                    <div className="main__container__orders__row__product__image">
                      <img
                        src="https://m.media-amazon.com/images/I/817NXl9u6RL._AC_SL1500_.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div onClick={() => removeHandler(item)} className="x col-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      className="bi bi-x-lg svg__remove"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </div>
                </div>
              ))}
          </div>
          <div className="main__container__inputs row">
            <div className="main__container__inputs__name col-6">
              <div className="main__container__inputs__name__box">
                <span className="fullname__label">
                  full name:{userInfo.user.name}
                </span>

                <input
                  name="fullname"
                  id="fullname"
                  className="input__data"
                  type="text"
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>
              {fullname === "" ? (
                "!"
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.59229 22.7471L22.2091 6.13022L18.079 2.0001L1.46216 18.6169L1.06494 23.1443L5.59229 22.7471Z"
                    stroke="#363636"
                    strokeWidth="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              )}
            </div>
            <div className="main__container__inputs__name col-6">
              <div className="main__container__inputs__name__box">
                <span>phone number:</span>

                <input
                  name="phonenumber"
                  id="phonenumber"
                  className="input__data"
                  type="number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <label htmlFor="phonenumber">
                {number ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59229 22.7471L22.2091 6.13022L18.079 2.0001L1.46216 18.6169L1.06494 23.1443L5.59229 22.7471Z"
                      stroke="#363636"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                ) : (
                  "!"
                )}
              </label>
            </div>
            <div className="main__container__inputs__name col-6">
              <div className="main__container__inputs__name__box col-8">
                <span>address:</span>

                <input
                  name="address"
                  id="address"
                  className="input__data"
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <label className="addressss" htmlFor="address">
                {address === "" ? (
                  "!"
                ) : (
                  <>
                    <div className="hover__address">
                      <div className="hover__address__row">
                        <label htmlFor="school"> school address</label>
                        <br />

                        <input type="radio" id="school" name="addresses" />
                      </div>
                      <div className="hover__address__row">
                        <label htmlFor="home"> home address</label>
                        <br />

                        <input type="radio" id="home" name="addresses" />
                      </div>

                      <div className="hover__address__row">
                        <label htmlFor="office"> office address</label>
                        <br />

                        <input type="radio" id="office" name="addresses" />
                      </div>
                    </div>
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7.5 7L14 1"
                        stroke="#363636"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </>
                )}
              </label>
            </div>
            <div className="main__container__inputs__name col-6">
              <div className="main__container__inputs__name__box">
                <span>email address:</span>

                <input
                  name="emailaddress"
                  id="emailaddress"
                  className="input__data"
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <label htmlFor="emailaddress">
                {email === "" ? (
                  "!"
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59229 22.7471L22.2091 6.13022L18.079 2.0001L1.46216 18.6169L1.06494 23.1443L5.59229 22.7471Z"
                      stroke="#363636"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                )}
              </label>
            </div>
          </div>
          <div className="main__container__orderinfo row">
            <div className="main__container__orderinfo__box col-3">
              order no: 9807611
            </div>
            <div className="main__container__orderinfo__box col-3">
              delivery time: 2 days
            </div>
            <div className="main__container__orderinfo__box col-3 payment__box">
              <span>payment: card</span>
              <svg
                className="svg__chevron"
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L7.5 7L14 1" stroke="#363636" strokeWidth="1.5" />
              </svg>
              <div className="payment__hover">
                <ul className="payment__hover__ul">
                  <li className="payment__hover__ul__li">
                    <label htmlFor="debitcard">debit card</label>
                    <input
                      className="payment__radio"
                      type="radio"
                      id="debitcard"
                      name="payment"
                    />
                  </li>
                  <li className="payment__hover__ul__li">
                    <label htmlFor="cash">cash on delivery</label>
                    <input
                      className="payment__radio"
                      type="radio"
                      id="cash"
                      name="payment"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="main__container__orderinfo__box col-3">
              your total: 670 azn
            </div>
          </div>
          <div className="main__container__button">
            {/* <button onClick={() => authPaymentHandler()}>authorize payment</button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
