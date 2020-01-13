import { GET_FAVORITES, URL_API } from "../config/constant";

import axios from "axios";

export const getFavorites = () => {
  const token = localStorage.getItem("tokenn");

  return {
    type: GET_FAVORITES,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/user/favorite`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
