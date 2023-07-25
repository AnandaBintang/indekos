$(document).ready(function () {
  getProgress();

  $("#progress-form").on("submit", (event) => {
    const accessToken = getCookie("accessToken");
    const progressPointer = $("#progress").find(":selected").val();
    const requestData = {
      progress_pointer: progressPointer,
    };

    updateProgress(accessToken, requestData);

    event.preventDefault();
  });
});
