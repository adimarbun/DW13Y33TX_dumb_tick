import { GET_USERS } from "../config/constant";

import axios from "axios";

export const getUsers = () => {
  const token = localStorage.getItem("tokenn");

  return {
    type: GET_USERS,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/user",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
