import { GET_FAVORITES } from "../config/constant";

import axios from "axios";

export const getFavorites = () => {
  const token = localStorage.getItem("tokenn");

  return {
    type: GET_FAVORITES,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/user/favorite",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
