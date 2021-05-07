import { _getUsers } from "../../_DATA";
import { SET_USERS } from "../action-types";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: { users },
  };
};

export const getUsers = () => (dispatch) =>
  _getUsers().then((users) => dispatch(setUsers(users)));
