import { Checkbox } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesResp = await axios.get(
        "http://localhost:3000/categories"
      );
      setCategories(categoriesResp.data);
    };
    getCategories();
  }, []);

  return (
    <ul className="filter__categories__hover__ul">
      {categories &&
        categories.map((category) => (
          <li key={category} className="filter__categories__hover__ul__li">
            <Checkbox {...label} /> {category}
          </li>
        ))}
    </ul>
  );
};

export default Categories;
