import { _getUsers } from "../../_DATA";
import { SET_USERS, SET_LOGGED_USER, LOGOUT_USER } from "../action-types";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: { users },
  };
};

export const getUsers = () => (dispatch) =>
  _getUsers().then((users) => dispatch(setUsers(users)));

export const setLoggedUser = (user) => {
  return {
    type: SET_LOGGED_USER,
    payload: { user },
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
