const BASE_URL = "http://127.0.0.1:5500";
const API_URL = "http://127.0.0.1:3000";

$(document).ready(function () {
  checkSession();

  $("#login-form").submit(function (event) {
    event.preventDefault();

    // Get the form data
    var email = $("#email").val();
    var password = $("#password").val();
    var keepLogged = false;

    // Set keep logged or not
    if ($("#keepLogged").is(":checked")) {
      keepLogged = true;
    }

    login(email, password, keepLogged);
  });
});
