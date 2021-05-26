import { SET_USERS, SET_LOGGED_USER, LOGOUT_USER } from "../action-types";

const initialState = {
  users: [],
  user: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const { users } = action.payload;
      const usersArray = Object.values(users);

      return { ...state, users: usersArray };

    case SET_LOGGED_USER:
      const { user } = action.payload;
      return { ...state, user };

    case LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
};

export default usersReducer;
