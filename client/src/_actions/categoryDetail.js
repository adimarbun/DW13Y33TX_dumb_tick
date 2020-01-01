import { GET_CATEGORY_EVENT } from "../config/constant";
import axios from "axios";

export const getEventCategory = category_id => {
  return {
    type: GET_CATEGORY_EVENT,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/category/${category_id}/events`
    })
  };
};
