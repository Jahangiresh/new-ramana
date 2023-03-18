import React, { Component, useReducer } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/singleproduct.scss";
import shoespng from "../assets/images/brownshoes.png";
import { BsBag, BsHeart, BsHeartFill, BsBagFill } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, product: action.payload };

    case "FETCH_FAIL":
      return { state, error: true, loading: false };

    default:
      return state;
  }
};

const SingleProduct = () => {
  const [{ product, loading, error }, dispatch] = useReducer(reducer, {
    product: {},
    loading: true,
    error: false,
  });
  const params = useParams();
  const _slug = params.slug;

  useEffect(() => {
    const getProduct = async () => {
      dispatch({ type: "FETCH_REQ" });
      try {
        const resp = await axios.get(
          `https://irp.ramanacastle.com/api/mehsullar/${_slug}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: resp.data.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        alert("error");
      }
    };
    getProduct();
  }, [_slug]);

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
                    {product.title}
                  </h2>
                  <span className="singleproduct__cover__container__row__mainproduct__header__title__span">
                    {product.price} azn
                  </span>
                </div>
                <div className="singleproduct__cover__container__row__mainproduct__header__icons">
                  <BsHeart />
                  <BsBag style={{ margin: "0 0 7px 20px" }} />
                </div>
              </div>
              <div className="singleproduct__cover__container__row__mainproduct__image">
                <Slider {...settings}>
                  {product.images &&
                    product.images.map((image) => (
                      <img key={image} src={image} alt="" />
                    ))}
                </Slider>
              </div>
              <div className="singleproduct__cover__container__row__mainproduct__footer"></div>
            </div>
            <div className="singleproduct__cover__container__row__album ">
              <div className="singleproduct__cover__container__row__album__upper">
                <img src={product.images && product.images[1]} alt="" />
              </div>
              <div className="singleproduct__cover__container__row__album__under">
                <img src={product.images && product.images[2]} alt="" />
              </div>
            </div>
          </div>
          <div className="singleproduct__cover__container__details row">
            <div className="singleproduct__cover__container__details__left col-5">
              <p className="singleproduct__cover__container__details__left__p">
                Product category: <br />
                {product.category}
              </p>{" "}
              <p className="singleproduct__cover__container__details__left__p">
                Materials:
                <br />
                {product.materials}
              </p>{" "}
              <p className="singleproduct__cover__container__details__left__p">
                Avaliable sizes:
                <br />
                {product.sizes &&
                  product.sizes.map((size) => (
                    <span key={size} style={{ marginRight: "10px" }}>
                      {size}
                    </span>
                  ))}
              </p>{" "}
              <p
                style={{ margin: 0 }}
                className="singleproduct__cover__container__details__left__p"
              >
                Avaliable colors:
                <br />
                {product.colors &&
                  product.colors.map((c) => (
                    <span key={c} style={{ marginRight: "10px" }}>
                      {c}
                    </span>
                  ))}
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
