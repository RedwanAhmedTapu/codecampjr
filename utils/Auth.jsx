export const authState = () => {
  let isAuthenticated = false;
  const token = localStorage.getItem("accessToken");
  const logintTime = localStorage.getItem("logintTime");
  if (token && logintTime + 10000 > Date.now()) {
    isAuthenticated = true;
  }
 else{
    isAuthenticated=false;
 }
  console.log(isAuthenticated)
  return isAuthenticated;
};
