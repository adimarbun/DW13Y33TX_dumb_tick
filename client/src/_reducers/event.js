import { GET_EVENT_ID, POST_EVENT } from "../config/constant";

const initialState = {
  event: [],
  dataAddEvent: [],
  isLoading: false,
  error: false
};

export const event = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_EVENT_ID}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENT_ID}_FULFILLED`:
      return {
        ...state,
        event: action.payload.data,
        isLoading: false
      };
    case `${GET_EVENT_ID}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: true
      };

    default:
      return state;
  }
};

export const addEvent = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${POST_EVENT}_FULLFILLED`:
      return {
        ...state,
        dataAddEvent: action.payload.data,
        isLoading: false
      };
    case `${POST_EVENT}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: true
      };

    default:
      return state;
  }
};
