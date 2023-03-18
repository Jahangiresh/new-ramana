import React, { useState, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../StoreContext";

import { toast } from "react-hot-toast";

const Signin = ({ setIsRegister }) => {
  // const [userInfo, setUserinfo] = useState();
  const { userInfo, setUserInfo } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://irp.ramanacastle.com/api/login-admin",
        {
          email,
          password,
        }
      );
      setUserInfo(localStorage.setItem("userInfo", JSON.stringify(resp.data)));
      toast.success("logged in");
      window.location.reload(false);
    } catch (err) {
      toast.error("try again!");
    }
  };

  return (
    <form method="POST">
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
          <button onClick={loginHandler} className="cart__body__button__btn">
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
  );
};

export default Signin;
