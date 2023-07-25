$(document).ready(function () {
  getSocialMedia();

  $("#social-media-form").on("submit", (event) => {
    const accessToken = getCookie("accessToken");

    const instagram = $("#instagram").val();
    const youtube = $("#youtube").val();
    const whatsapp = $("#whatsapp").val();

    const requestData = {
      instagram: instagram,
      youtube: youtube,
      whatsapp: whatsapp,
    };

    updateSocialMedia(accessToken, requestData);

    event.preventDefault();
  });
});
