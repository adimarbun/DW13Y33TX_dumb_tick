import { GET_CATEGORIES, GET_CATEGORY } from "../config/constant";

const initialState = {
  dataCategories: [],
  dataCategory: [],
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

export const category = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CATEGORY}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CATEGORY}_FULFILLED`:
      return {
        ...state,
        dataCategory: action.payload.data,
        isLoading: false
      };
    case `${GET_CATEGORY}_REJECTED`:
      return {};

    default:
      return state;
  }
};
