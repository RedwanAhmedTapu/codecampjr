export const authState = () => {
  let isAuthenticated = false;
  const token = localStorage.getItem("accessToken");
  const logintTime = localStorage.getItem("logintTime");
  const logintTimeInteger = parseInt(logintTime, 10);
  console.log(logintTimeInteger + 10);
  if (token && (logintTimeInteger + 3600000) > Date.now()) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  console.log(isAuthenticated);
  return isAuthenticated;
};
