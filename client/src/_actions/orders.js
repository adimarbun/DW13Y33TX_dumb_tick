import { GET_ORDER, GET_ORDER_PENDING } from "../config/constant";
import axios from "axios";

export const getOrder = order_id => {
  const token = localStorage.getItem("tokenn");

  return {
    type: GET_ORDER,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/order/${order_id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};

export const getOrderPending = () => {
  const token = localStorage.getItem("tokenn");
  return {
    type: GET_ORDER_PENDING,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/orderPending",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
