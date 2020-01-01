import { GET_USERS } from "../config/constant";

const initialState = {
  dataUsers: [],
  isLoading: false,
  error: false
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_USERS}_FULFILLED`:
      return {
        ...state,
        dataUsers: action.payload.data,
        isLoading: false
      };
    case `${GET_USERS}_REJECTED`:
      return {};

    default:
      return state;
  }
};
