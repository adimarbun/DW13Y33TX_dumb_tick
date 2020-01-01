import { GET_FAVORITES } from "../config/constant";

const initialState = {
  dataFavorites: [],
  isLoading: false,
  error: false
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_FAVORITES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_FAVORITES}_FULFILLED`:
      return {
        ...state,
        dataFavorites: action.payload.data,
        isLoading: false
      };
    case `${GET_FAVORITES}_REJECTED`:
      return {};

    default:
      return state;
  }
};
