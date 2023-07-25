const BASE_URL = "http://127.0.0.1:5500";
const API_URL = "http://127.0.0.1:3000";
const ACCESS_TOKEN = getCookie("accessToken");
const REFRESH_TOKEN = getCookie("refreshToken");

$(document).ready(function () {
  const requestData = {
    refreshToken: REFRESH_TOKEN,
  };

  checkAuth(ACCESS_TOKEN, requestData);

  $("#logout").on("click", function () {
    logout();
  });
});
