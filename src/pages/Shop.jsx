import React from "react";
import menCover from "../assets/images/unsplash_hCG34GSdYTA.png";
import womenCover from "../assets/images/womenshopcover.png";

import "../assets/css/shop.scss";
import { RiArrowUpDownLine } from "react-icons/ri";
// import { VscChevronDown } from "react-icons/vsc";
import filterIcon from "../assets/images/filter.png";
import Checkbox from "@mui/material/Checkbox";
import MenProduct from "../components/Product";
import { useContext } from "react";
import { StoreContext } from "../StoreContext";
import Categories from "../components/Categories";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Shop = () => {
  const { gender } = useContext(StoreContext);

  return (
    <>
      <div className="shop">
        <div className="shop__cover">
          {gender && gender === "male" ? (
            <img src={menCover} alt="" />
          ) : (
            <img src={womenCover} alt="" />
          )}
          <h1>
            {gender && gender === "male" ? "men's" : "women's"} <br /> footwear
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
                  className="col-5 filter__li filter__li__center"
                >
                  <span style={{ fontWeight: "bold" }}>footwear / men</span>
                  <span
                    className="li__none span__size"
                    style={{ marginRight: "20px", padding: 0 }}
                  >
                    sizes
                  </span>
                </li>
                <li className="col-2 li__none  filter__li">colors</li>
                <li className="col-2 li__none filter__li">materials</li>
                <li id="categories" className="col-2 filter__li li__none">
                  categories
                  <div className="filter__categories__hover">
                    {/* <ul className="filter__categories__hover__ul">
                      <li className="filter__categories__hover__ul__li">
                        <Checkbox {...label} /> salam
                      </li>
                      <li className="filter__categories__hover__ul__li">
                        <Checkbox {...label} /> salam
                      </li>
                      <li className="filter__categories__hover__ul__li">
                        <Checkbox {...label} /> salam
                      </li>
                    </ul> */}
                    <Categories />
                  </div>
                </li>
                <li className="col-1 filter__li">
                  <RiArrowUpDownLine />
                </li>
              </ul>
            </div>
            <div className="shop__content__container__products row">
              <MenProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
