import React, { useContext, useEffect, useReducer, useState } from "react";
import "../assets/css/product.scss";
import arrow from "../assets/images/Arrow.png";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import ReactPaginate from "react-paginate";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsBag, BsHeart, BsHeartFill, BsBagFill } from "react-icons/bs";

import { StoreContext } from "../StoreContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

const MenProduct = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 300,
    pauseOnHover: false,
    autoplay: false,
  };
  const navigate = useNavigate();
  const [{ products, error, loading }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: false,
  });

  const { setGender } = useContext(StoreContext);
  const params = useParams();
  const productGender = params.gender;

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        setGender(productGender);

        const resp = await axios.get(
          `https://irp.ramanacastle.com/api/mehsullar?gender=${productGender}`
        );

        dispatch({ type: "FETCH_SUCCESS", payload: resp.data.data });
      } catch (error) {}

      dispatch({ type: "FETCH_FAIL" });
    };
    getProducts();
  }, [productGender]);

  // const fetchProducts = async (currentPage) => {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:3000/products?_page=${currentPage}&_limit=9`
  //     );
  //     return res.data;
  //   } catch (error) {
  //     alert("error");
  //   }
  // };

  const { favorites, setFavorites, cartItems, setCartItems } =
    useContext(StoreContext);

  // const handlePageClick = async (data) => {
  //   let currentPage = data.selected + 1;
  //   const menproductsFormServer = await fetchProducts(currentPage);
  //   dispatch({ type: "FETCH_SUCCESS", payload: menproductsFormServer });
  // };

  //localFavadd
  const favoriteHandler = (product) => {
    let FavoritProds = JSON.parse(localStorage.getItem("favorites"));
    let existedProduct = FavoritProds.find((fav) => fav.id === product.id);

    if (!existedProduct) {
      product.isFav = true;

      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      const updatedArray = FavoritProds.filter((fav) => fav.id !== product.id);
      product.isFav = false;

      setFavorites(updatedArray);
      localStorage.setItem("favorites", JSON.stringify(updatedArray));
    }
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  };

  const cartHandler = (product) => {
    let existedProduct = cartItems.find((item) => item.id === product.id);
    if (!existedProduct) {
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      existedProduct.quantity = 22;
    }
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  };

  return loading ? (
    <div>
      <LoadingBox />
    </div>
  ) : (
    <>
      {products &&
        products.map((product) => {
          return (
            <div key={product.id} className="product__box col-6">
              <div className="icons__div__product">
                <span
                  onClick={() => cartHandler(product)}
                  className="icons__div__product__bag"
                >
                  {cartItems && cartItems.find((c) => c.id === product.id) ? (
                    <BsBagFill />
                  ) : (
                    <BsBag />
                  )}
                </span>
                <span
                  onClick={() => favoriteHandler(product)}
                  className="icons__div__product__heart"
                >
                  {favorites && favorites.find((f) => f.id === product.id) ? (
                    <BsHeartFill />
                  ) : (
                    <BsHeart />
                  )}
                </span>
              </div>
              <div
                onClick={() => navigate(`/singleproduct/${product.slug}`)}
                className="product__box__image"
              >
                <img
                  className="produc__img"
                  key={product.id}
                  src={product.image}
                  alt="prod.jpeg"
                />
                {/* <Slider {...settings}>
                  {product.images &&
                    product.images.map((img) => (
                      <img
                        className="produc__img"
                        key={product.id}
                        src={img}
                        alt=""
                      />
                    ))}
                </Slider> */}
              </div>
              <div
                onClick={() => navigate(`/singleproduct/${product.id}`)}
                className="product__box__content"
              >
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
          pageRangeDisplayed={5}
          pageCount={products.length}
          renderOnZeroPageCount={null}
          activeClassName={"active__page"}
        />
      </div>
    </>
  );
};

export default MenProduct;
