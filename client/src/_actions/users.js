import { GET_USERS, URL_API } from "../config/constant";

import axios from "axios";

export const getUsers = () => {
  const token = localStorage.getItem("tokenn");

  return {
    type: GET_USERS,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/user`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
