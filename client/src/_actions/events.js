import { GET_EVENTS, URL_API } from "../config/constant";

import axios from "axios";

export const getEvents = () => {
  console.log(URL_API);
  return {
    type: GET_EVENTS,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/upComing`
    })
  };
};
