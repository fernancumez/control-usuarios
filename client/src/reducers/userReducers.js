import { GET_USERS, CREATE_USER, DELETE_USER } from "../types";

const initialState = {
  users: [],
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case DELETE_USER:
      return {
        ...state,
        users: [...state.users.filter((user) => user._id !== action.payload)],
      };

    default:
      return state;
  }
};
