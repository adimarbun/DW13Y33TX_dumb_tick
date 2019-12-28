import { GET_CATEGORIES } from "../config/constant";

const initialState = {
  dataCategories: [],
  isLoading: false,
  error: false
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CATEGORIES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CATEGORIES}_FULFILLED`:
      return {
        ...state,
        dataCategories: action.payload.data,
        isLoading: false
      };
    case `${GET_CATEGORIES}_REJECTED`:
      return {};

    default:
      return state;
  }
};
