import { GET_CATEGORIES, GET_CATEGORY } from "../config/constant";

import axios from "axios";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/categories"
    })
  };
};

export const getCategory = category_id => {
  return {
    type: GET_CATEGORY,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/category/${category_id}`
    })
  };
};
