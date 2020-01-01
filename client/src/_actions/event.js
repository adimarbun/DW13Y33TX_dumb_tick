import { GET_EVENT_ID } from "../config/constant";
import axios from "axios";

export const getEvent = event_id => {
  return {
    type: GET_EVENT_ID,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/event/${event_id}`
    })
  };
};
