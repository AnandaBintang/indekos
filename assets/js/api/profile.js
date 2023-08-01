$(document).ready(function () {
  getProfile(ACCESS_TOKEN, "profile");

  $("#name-email-form").on("submit", (event) => {
    const name = $("#user-name").val();
    const email = $("#user-email").val();

    const requestData = {
      name: name,
      email: email,
    };

    updateName(ACCESS_TOKEN, requestData);

    event.preventDefault();
  });

  $("#change-password-form").on("submit", (event) => {
    const email = $("#user-email").val();
    const oldPassword = $("#oldPassword").val();
    const newPassword = $("#newPassword").val();

    const requestData = {
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    updatePassword(ACCESS_TOKEN, requestData);

    event.preventDefault();
  });
});
