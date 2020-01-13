import { GET_EVENT_ID, URL_API, POST_EVENT } from "../config/constant";
import axios from "axios";

export const getEvent = event_id => {
  return {
    type: GET_EVENT_ID,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/event/${event_id}`
    })
  };
};

export const addEvent = event => {
  const token = localStorage.getItem("tokenn");

  return {
    type: POST_EVENT,
    payload: axios({
      method: "POST",
      url: `${URL_API}api/v1/event`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: event
    }).then(res => {
      window.location = "/";
    })
  };
};
