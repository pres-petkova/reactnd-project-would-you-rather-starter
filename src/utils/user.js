export const setLoggedUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getLoggedUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const logoutUser = () => {
  localStorage.clear();
};
