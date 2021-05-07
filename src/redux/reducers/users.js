import { SET_USERS } from "../action-types";

const initialState = {
    users: [],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS:
        const { users } = action.payload;
        const usersArray = Object.values(users);
  
        return { users: usersArray };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  