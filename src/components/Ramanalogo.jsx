import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/ramanalogo.scss";
const Ramanalogo = () => {
  return (
    <div className="ramana__logo">
      <img style={{ width: "100%" }} src={logo} alt="logo.png" />
    </div>
  );
};

export default Ramanalogo;
