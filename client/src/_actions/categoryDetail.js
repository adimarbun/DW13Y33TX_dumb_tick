import { GET_CATEGORY_EVENT, URL_API } from "../config/constant";
import axios from "axios";

export const getEventCategory = category_id => {
  return {
    type: GET_CATEGORY_EVENT,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/category/${category_id}/events`
    })
  };
};
