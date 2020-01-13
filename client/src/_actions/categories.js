import { GET_CATEGORIES, GET_CATEGORY, URL_API } from "../config/constant";

import axios from "axios";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/categories`
    })
  };
};

export const getCategory = category_id => {
  return {
    type: GET_CATEGORY,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/category/${category_id}`
    })
  };
};
