import React, { useEffect, useReducer } from "react";
import "../assets/css/product.scss";
import arrow from "../assets/images/Arrow.png";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import ReactPaginate from "react-paginate";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, womenproducts: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

const WomenProduct = () => {
  const [isAutoplay, setIsAutoplay] = useState(false);
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 300,
    pauseOnHover: false,
    autoplay: isAutoplay,
  };
  const navigate = useNavigate();

  const [{ womenproducts, error, loading }, dispatch] = useReducer(reducer, {
    womenproducts: [],
    loading: true,
    error: false,
  });
  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const resp = await axios.get(
          "http://localhost:3000/womenproducts?_page=1&_limit=9"
        );

        dispatch({ type: "FETCH_SUCCESS", payload: resp.data });
      } catch (error) {}

      dispatch({ type: "FETCH_FAIL" });
    };
    getProducts();
  }, []);

  const fetchProducts = async (currentPage) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/womenproducts?_page=${currentPage}&_limit=9`
      );
      return res.data;
    } catch (error) {
      alert("error");
    }
  };
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const womenproductsFormServer = await fetchProducts(currentPage);
    dispatch({ type: "FETCH_SUCCESS", payload: womenproductsFormServer });
  };

  return loading ? (
    <div>
      <LoadingBox />
    </div>
  ) : (
    <>
      {womenproducts &&
        womenproducts.map((product) => {
          return (
            <div
              onClick={() => navigate(`/singleproduct/${product.id}`)}
              // onMouseOver={() => setIsAutoplay(true)}
              // onMouseOut={() => setIsAutoplay(false)}
              key={product.id}
              className="product__box col-6"
            >
              <div className="product__box__image">
                <Slider {...settings}>
                  {product.images &&
                    product.images.map((img) => (
                      <img
                        className="produc__img"
                        key={product.id}
                        src={img}
                        alt=""
                      />
                    ))}
                </Slider>
              </div>
              <div className="product__box__content">
                <div className="product__box__content__details col-9">
                  <h3>{product.title}</h3>
                  <span>{product.price} AZN</span>
                </div>
                <div className="product__box__content__arrow col-3">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      <div className="pagination__ul">
        <ReactPaginate
          previousLabel=<HiArrowLeft className="page__arrow__icon" />
          breakLabel="..."
          nextLabel=<HiArrowRight className="page__arrow__icon" />
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={11}
          renderOnZeroPageCount={null}
          activeClassName={"active__page"}
        />
      </div>
    </>
  );
};

export default WomenProduct;
