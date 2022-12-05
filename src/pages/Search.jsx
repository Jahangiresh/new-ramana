import bgImage from "../assets/images/unsplash_hCG34GSdYTA.jpg";
import "../assets/css/search.scss";
import { BsSearch } from "react-icons/bs";
import LoadingBox from "../components/LoadingBox";
import { React, useReducer, useEffect, useState } from "react";

import axios from "axios";

const reducer = (action, state) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, categories: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

const Search = () => {
  const [{ categories, loading, error }, dispatch] = useReducer(reducer, {
    categories: [],
    loading: true,
    error: false,
  });

  const [searchResult, setSearchResult] = useState("");
  useEffect(() => {
    const getCategories = async () => {
      dispatch({ type: "FETCH_REQ" });
      try {
        const resp = await axios.get("http://localhost:3000/categories");
        dispatch({ type: "FETCH_SUCCESS", payload: resp.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        alert("error");
      }
    };
    getCategories();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : (
    <div className="search">
      <div className="search__box container">
        <div className="search__box__inputs">
          <input
            onChange={(e) => setSearchResult(e.target.value)}
            type="text"
            placeholder="ENTER SEARCH KEYWORDS HERE"
          />
          <span className="search__box__inputs__icon">
            <BsSearch />
          </span>
        </div>
        <div className="search__box__categories row">
          {categories &&
            categories
              .filter((categories) => categories.includes(searchResult))
              .map((c) => (
                <div
                  key={c}
                  className="search__box__categories__category col-3"
                >
                  <span className="search__box__categories__category__span">
                    {c}
                  </span>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
