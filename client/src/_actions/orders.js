import {
  GET_ORDER,
  GET_ORDER_PENDING,
  GET_ORDER_APPROVED,
  URL_API
} from "../config/constant";
import axios from "axios";

export const getOrder = order_id => {
  const token = localStorage.getItem("tokenn");

  return {
    type: GET_ORDER,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/order/${order_id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};

//order status = pending
export const getOrderPending = () => {
  const token = localStorage.getItem("tokenn");
  return {
    type: GET_ORDER_PENDING,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/orderPending`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};

//order status = approved

export const getOrderApproved = () => {
  const token = localStorage.getItem("tokenn");
  return {
    type: GET_ORDER_APPROVED,
    payload: axios({
      method: "GET",
      url: `${URL_API}api/v1/orderApproved`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
