const BASE_URL = "http://127.0.0.1:5500";
const API_URL = "http://127.0.0.1:3000";

$(document).ready(function () {
  setProgress();
});

async function setProgress() {
  try {
    const response = await $.ajax({
      url: `${API_URL}/api/progress`,
      type: "GET",
    });
    if (response.data.progress_pointer == "pre-production") {
      $(".progress-pointer").css("left", "27%");
    } else if (response.data.progress_pointer == "production") {
      $(".progress-pointer").css("left", "44%");
    } else if (response.data.progress_pointer == "post-production") {
      $(".progress-pointer").css("left", "59%");
    } else if (response.data.progress_pointer == "launching") {
      $(".progress-pointer").css("left", "75%");
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
