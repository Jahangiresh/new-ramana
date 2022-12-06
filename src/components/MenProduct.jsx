import React, { useEffect, useReducer } from "react";
import "../assets/css/product.scss";
import shoesImg from "../assets/images/Men-Shoes.png";
import arrow from "../assets/images/Arrow.png";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import ReactPaginate from "react-paginate";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [{ products, error, loading }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: false,
  });
  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const resp = await axios.get(
          "http://localhost:3000/menproducts?_page=1&_limit=9"
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
        `http://localhost:3000/menproducts?_page=${currentPage}&_limit=9`
      );
      return res.data;
    } catch (error) {
      alert("error");
    }
  };
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const productsFormServer = await fetchProducts(currentPage);
    dispatch({ type: "FETCH_SUCCESS", payload: productsFormServer });
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
            <div
              onClick={() => navigate(`/singleproduct/${product.id}`)}
              key={product.id}
              className="product__box col-6"
            >
              <div className="product__box__image">
                <img src={shoesImg} alt="" />
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
          pageCount={products.length}
          renderOnZeroPageCount={null}
          activeClassName={"active__page"}
        />
      </div>
    </>
  );
};

export default MenProduct;
