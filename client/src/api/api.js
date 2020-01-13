import axios from "axios";
import { URL_API } from "../config/constant";

export const register = newUser => {
  return axios
    .post(`${URL_API}api/v1/register`, {
      name: newUser.name,
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
      noTelp: newUser.noTelp,
      img: newUser.img
    })
    .then(response => {
      if (response.data.token !== undefined) {
        localStorage.setItem("tokenn", response.data.token);
        return response.data;
      }
    });
};

export const login = user => {
  return axios
    .post(`${URL_API}api/v1/login`, {
      username: user.username,
      password: user.password
    })
    .then(response => {
      if (response.data.token !== undefined) {
        localStorage.setItem("tokenn", response.data.token);
        return response.data;
      }
    })
    .catch(err => {
      console.log(err);
    });
};
