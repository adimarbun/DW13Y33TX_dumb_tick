import { GET_CATEGORY_EVENT } from "../config/constant";

const initialState = {
  data: [],
  isLoading: false,
  error: false
};

export const categoryEvent = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CATEGORY_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CATEGORY_EVENT}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_CATEGORY_EVENT}_REJECTED`:
      return {};

    default:
      return state;
  }
};
