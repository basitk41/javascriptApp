export const CheckAuth = (setToken) => {
  const jwt = localStorage.getItem("token");
  if (jwt) {
    setToken("ok");
  }
};
