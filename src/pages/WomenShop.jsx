import React from "react";
import shopCover from "../assets/images/womenshopcover.png";
import "../assets/css/shop.scss";
import { RiArrowUpDownLine } from "react-icons/ri";
// import { VscChevronDown } from "react-icons/vsc";
import MenProduct from "../components/MenProduct";
import filterIcon from "../assets/images/filter.png";
import Checkbox from "@mui/material/Checkbox";
import WomenProduct from "../components/WomenProduct";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const WomenShop = () => {
  return (
    <>
      <div className="shop">
        <div className="shop__cover">
          <img src={shopCover} alt="" />
          <h1>
            women's <br /> footwear
          </h1>
        </div>
        <div className="shop__content">
          <div className="shop__content__container container">
            <div className="shop__content__container__filter row">
              <ul className="filter__ul">
                <li className="col-2 d-flex d-md-none filter__li ">
                  <img src={filterIcon} alt="" />
                </li>
                <li
                  style={{ justifyContent: "space-between" }}
                  className="col-5 filter__li"
                >
                  <span style={{ fontWeight: "bold" }}>footwear / women</span>
                  <span
                    className="li__none span__size"
                    style={{ marginRight: "20px", padding: 0 }}
                  >
                    sizes
                  </span>
                </li>
                <li className="col-2 li__none filter__li">colors</li>
                <li className="col-2 li__none filter__li">materials</li>
                <li id="categories" className="col-2 filter__li">
                  categories
                  <div className="filter__categories__hover">
                    <ul className="filter__categories__hover__ul">
                      <li className="filter__categories__hover__ul__li">
                        <Checkbox {...label} /> salam
                      </li>
                      <li className="filter__categories__hover__ul__li">
                        <Checkbox {...label} /> salam
                      </li>
                      <li className="filter__categories__hover__ul__li">
                        <Checkbox {...label} /> salam
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="col-1 filter__li">
                  <RiArrowUpDownLine />
                </li>
              </ul>
            </div>
            <div className="shop__content__container__products row">
              <WomenProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WomenShop;
