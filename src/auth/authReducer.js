import { types } from "../types";

const state = {
  // username: 'Alejandro',
  // logged: false,
};

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
