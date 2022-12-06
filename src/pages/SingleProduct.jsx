import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/singleproduct.scss";
import shoespng from "../assets/images/brownshoes.png";
import { BsBag, BsHeart, BsHeartFill, BsBagFill } from "react-icons/bs";
const SingleProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="singleproduct">
      <div className="singleproduct__cover">
        <div className="singleproduct__cover__container container">
          <h3 className="singleproduct__cover__container__h">
            product details
          </h3>

          <div className="singleproduct__cover__container__row row">
            <div className="singleproduct__cover__container__row__mainproduct col-7">
              <div className="singleproduct__cover__container__row__mainproduct__header">
                <div className="singleproduct__cover__container__row__mainproduct__header__title">
                  <h2 className="singleproduct__cover__container__row__mainproduct__header__title__h">
                    brown leather shoes
                  </h2>
                  <span className="singleproduct__cover__container__row__mainproduct__header__title__span">
                    120azn
                  </span>
                </div>
                <div className="singleproduct__cover__container__row__mainproduct__header__icons">
                  <BsHeart />
                  <BsBag style={{ margin: "0 0 7px 20px" }} />
                </div>
              </div>
              <div className="singleproduct__cover__container__row__mainproduct__image">
                <Slider {...settings}>
                  <img src={shoespng} alt="" />
                  <img src={shoespng} alt="" />
                  <img src={shoespng} alt="" />
                </Slider>
              </div>
              <div className="singleproduct__cover__container__row__mainproduct__footer">
                sa
              </div>
            </div>
            <div className="singleproduct__cover__container__row__album ">
              <div className="singleproduct__cover__container__row__album__upper">
                <img src={shoespng} alt="" />
              </div>
              <div className="singleproduct__cover__container__row__album__under">
                <img src={shoespng} alt="" />
              </div>
            </div>
          </div>
          <div className="singleproduct__cover__container__details row">
            <div className="singleproduct__cover__container__details__left col-5">
              <p className="singleproduct__cover__container__details__left__p">
                Product category: <br />
                Moccasins, Men’s footwear.
              </p>{" "}
              <p className="singleproduct__cover__container__details__left__p">
                Materials:
                <br />
                Real calfskin leather, cotton.
              </p>{" "}
              <p className="singleproduct__cover__container__details__left__p">
                Avaliable sizes:
                <br />
                36, 37, 38, 39, 40, 41, 42
              </p>{" "}
              <p
                style={{ margin: 0 }}
                className="singleproduct__cover__container__details__left__p"
              >
                Avaliable colors:
                <br />
                Brown, Auburn, Sage green, Grey, Midnight
              </p>
            </div>
            <div className="singleproduct__cover__container__details__right col-7">
              <div className="singleproduct__cover__container__details__right__inputs">
                <select
                  className="singleproduct__cover__container__details__right__inputs__select"
                  name="size"
                  id="size"
                >
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="40">40</option>
                  <option value="42">42</option>
                </select>{" "}
                <input
                  className="singleproduct__cover__container__details__right__inputs__input"
                  type="number"
                />
              </div>
              <div className="singleproduct__cover__container__details__right__btns">
                <button>add to cart</button>
                <button>buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
