import { LOG_IN, LOG_OUT } from "../action-types";

const initialState = {
  loggedUser: undefined,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      const userId = action.payload.userId;

      return { loggedUser: userId };
    case LOG_OUT:
      return { initialState };
    default:
      return state;
  }
};

export default loginReducer;
