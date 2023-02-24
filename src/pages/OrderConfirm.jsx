import "../assets/css/search.scss";
import "../assets/css/orderconfirm.scss";
import { BsSearch } from "react-icons/bs";
import LoadingBox from "../components/LoadingBox";
import { React, useEffect, useState } from "react";

const OrderConfirm = () => {
  return (
    <div className="search">
      <div className="search__box container">
        <div className="box">
          <div className="ordermessage">
            <p className="status">
              Order Confirmed
              <svg
                className="svg__chevron"
                width="21"
                height="15"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L7.5 7L14 1" stroke="#363636" strokeWidth="2" />
              </svg>
            </p>
            <p className="message">
              we have recieved your order and will deliever it to you shortly.
              Thank you for your purchase!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
