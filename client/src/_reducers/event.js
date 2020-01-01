import { GET_EVENT_ID } from "../config/constant";

const initialState = {
  event: [],
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
      return {};

    default:
      return state;
  }
};
