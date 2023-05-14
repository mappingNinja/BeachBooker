import { LOGIN, LOGOUT } from "../types/types";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export default reducer;
