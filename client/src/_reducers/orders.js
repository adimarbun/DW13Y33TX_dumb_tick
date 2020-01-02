import { GET_ORDER, GET_ORDER_PENDING } from "../config/constant";

const initialState = {
  dataOrder: [],
  dataOrderPending: [],
  isLoading: false,
  error: false
};

export const order = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ORDER}_FULFILLED`:
      return {
        ...state,
        dataOrder: action.payload.data,
        isLoading: false
      };
    case `${GET_ORDER}_REJECTED`:
      return {};

    default:
      return state;
  }
};

export const orderPending = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDER_PENDING}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ORDER_PENDING}_FULFILLED`:
      return {
        ...state,
        dataOrderPending: action.payload.data,
        isLoading: false
      };
    case `${GET_ORDER_PENDING}_REJECTED`:
      return {};

    default:
      return state;
  }
};
