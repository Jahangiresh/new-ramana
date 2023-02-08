import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";

const Register = ({ setIsRegister }) => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [UserId, setUserId] = useState(null);

  const [ConfirmCode, setConfirmCode] = useState();

  const [loader, setLoader] = useState(false);

  const registerHandler = async (e) => {
    setLoader(true);
    try {
      const { data } = await axios.post(
        "https://newramana.azurewebsites.net/api/account/register",
        {
          name,
          surname,
          email,
          password,
          phonenumber,
        }
      );
      setLoader(false);
      toast.success("Successfully toasted!");
      setUserId(data.userId);
    } catch (error) {
      setLoader(false);

      toast.error("error!");
    }
  };

  const confirmHandler = async () => {
    setLoader(true);

    try {
      const { data } = await axios.post(
        "https://newramana.azurewebsites.net/api/account/emailconfirm",
        {
          UserId,
          ConfirmCode,
        }
      );
      setLoader(false);

      toast.success(data);
      window.location.href = redirect || "/";
    } catch (error) {
      setLoader(false);

      toast.error("err");
    }
  };
  return loader ? (
    <LoadingBox />
  ) : UserId !== null ? (
    <div className="cart__body ">
      <h2 className="cart__body__h">confirmation code</h2>

      <div className="cart__body__email">
        <input
          onChange={(e) => setConfirmCode(e.target.value)}
          className="auth__input text-center mt-5"
          type="text"
          id="name"
        />
      </div>

      <div className="cart__body__button">
        <div className="register__button">
          <button
            onClick={() => confirmHandler()}
            className="register__button__register"
          >
            confirm
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
  ) : (
    <form method="POST">
      <div className="cart__body ">
        <h2 className="cart__body__h">register</h2>
        <div className="cart__body__email">
          <label htmlFor="name"> name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="auth__input"
            type="text"
            id="name"
          />
        </div>
        <div className="cart__body__email">
          <label htmlFor="name">sur name</label>
          <input
            onChange={(e) => setSurname(e.target.value)}
            className="auth__input"
            type="text"
            id="name"
          />
        </div>

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
            onChange={(e) => setPassword(e.target.value)}
            className="auth__input"
            type="password"
            id="password"
          />
        </div>

        <div className="cart__body__email">
          <label htmlFor="phonenumber">phone number</label>
          <input
            onChange={(e) => setPhonenumber(e.target.value)}
            className="auth__input"
            type="text"
            id="phonenumber"
          />
        </div>
        {/* <div className="cart__body__email">
        <label htmlFor="birthdate">birth date</label>
        <input
          className="auth__input"
          type="password"
          id="birthdate"
        />
      </div> */}
        <div className="cart__body__accept">
          <div className="cart__body__reset__accept__checkbox">
            <label htmlFor="remember">join our newsletter</label>{" "}
            <input name="remember" id="join" type="checkbox" />
          </div>
          <div className="cart__body__reset__accept__checkbox">
            <label htmlFor="remember">agree to the terms and conditions</label>{" "}
            <input name="remember" id="remember" type="checkbox" />
          </div>
        </div>

        <div className="cart__body__button">
          <div className="register__button">
            <button
              onClick={() => registerHandler()}
              className="register__button__register"
            >
              register
            </button>
            <button
              //   onClick={() => setIsRegister((value) => !value)}
              onClick={() => setIsRegister(false)}
              className="register__button__register"
            >
              login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
