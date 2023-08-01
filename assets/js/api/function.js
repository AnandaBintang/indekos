async function login(email, password, keepLogged) {
  // Set request body
  const requestBody = {
    email: email,
    password: password,
  };

  try {
    // Send login request to API server
    const response = await $.ajax({
      url: `${API_URL}/api/auth/login`,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });

    // Set Cookie
    document.cookie = `accessToken=${response.token.accessToken}; secure; path=/admin`;
    document.cookie = `refreshToken=${response.token.refreshToken}; secure; path=/admin`;

    // Redirect to the home page or perform any other necessary actions
    saveSession(keepLogged);
    window.location.href = `${BASE_URL}/admin/dashboard.html`;
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: error.responseJSON.message,
    });

    console.log(error.responseJSON.error);
  }
}

function saveSession(keepLogged) {
  if (keepLogged) {
    localStorage.setItem("isLoggedIn", true);
  }
}

function clearSession() {
  localStorage.removeItem("theme");
  localStorage.removeItem("isLoggedIn");
}

function checkSession() {
  if (localStorage.getItem("isLoggedIn")) {
    window.location.href = `${BASE_URL}/admin/dashboard.html`;
  }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function logout() {
  Swal.fire({
    title: "Are you sure want to log out?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout",
  }).then((result) => {
    if (result.isConfirmed) {
      clearSession();
      window.location.href = `${BASE_URL}`;
    }
  });
}

function setProfile(name, email, pages) {
  if (pages == "dashboard") {
    $("#user-name").text(name);
    $("#user-email").text(email);
    return;
  }

  $("#user-name").val(name);
  $("#user-email").val(email);
  return;
}

function setProgress(value) {
  $("#progress").val(value).change();
}

function setSocialMedia(instagram, youtube, whatsapp) {
  $("#instagram").val(instagram);
  $("#youtube").val(youtube);
  $("#whatsapp").val(whatsapp);
}

async function getProfile(accessToken, pages) {
  try {
    const response = await $.ajax({
      url: `${API_URL}/api/users/profile`,
      type: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);
      },
    });
    setProfile(response.data.name, response.data.email, pages);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function getProgress(accessToken) {
  try {
    const response = await $.ajax({
      url: `${API_URL}/api/progress`,
      type: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);
      },
    });
    setProgress(response.data.progress_pointer);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function getSocialMedia(accessToken) {
  try {
    const response = await $.ajax({
      url: `${API_URL}/api/social-media`,
      type: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);
      },
    });
    setSocialMedia(
      response.data.instagram,
      response.data.youtube,
      response.data.whatsapp
    );
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function updateSocialMedia(token, data) {
  try {
    const response = await $.ajax({
      url: `${API_URL}/api/social-media/update`,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      },
    });

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: response.message,
    });
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: error.responseJSON.message,
    });

    console.log(error.responseJSON.error);
  }
}

async function updateProgress(token, data) {
  try {
    const response = await $.ajax({
      url: `${API_URL}/api/progress/update`,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      beforeSend: function (request) {
        request.setRequestHeader("Authorization", `Bearer ${token}`);
      },
    });

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: response.message,
    });
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: error.responseJSON.message,
    });

    console.log(error.responseJSON.error);
  }
}

async function updateName(token, data) {
  try {
    const response = await $.ajax({
      url: `${API_URL}/api/users/update`,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      },
    });

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: response.message,
    });
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: error.responseJSON.message,
    });

    console.log(error.responseJSON.error);
  }
}

async function updatePassword(token, data) {
  try {
    const response = await $.ajax({
      url: `${API_URL}/api/users/update-password`,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      },
    });

    Swal.fire({
      title: "Password successfully updated, returning to login page again...",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Ok",
      denyButtonText: `Don't`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("isLoggedIn");
        window.location.href = `${BASE_URL}/auth/login.html`;
      }
    });
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: error.responseJSON.message,
    });

    console.log(error.responseJSON.error);
  }
}

async function checkAuth(accessToken, data) {
  try {
    await $.ajax({
      url: `${API_URL}/api/auth/check-authorization`,
      type: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);
      },
    });
  } catch (error) {
    renewToken(data);
  }
}

async function renewToken(refreshToken) {
  try {
    const response = await $.ajax({
      url: `${API_URL}/api/auth/refresh-token`,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(refreshToken),
    });
    document.cookie = `accessToken=${response.accessToken}; secure; path=/admin`;
  } catch (error) {
    window.location.href = `${BASE_URL}/auth/login.html`;
    localStorage.removeItem("isLoggedIn");
    console.log(`Error: ${error}`); // Mengakses error jika terjadi kesalahan
  }
}
