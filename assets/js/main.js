$(window).on("load", function () {
  // Preloader
  $("#preloader").css({
    opacity: "0",
    transition: "all 1s ease",
  });
  setTimeout(() => {
    $("#preloader").remove();
    $("#logo").removeClass("d-none");
    $("#logo").addClass("bounce-top");
  }, 500);
});
$(document).ready(function () {
  // Menu
  $(".menu-button").on("click", function () {
    if ($(".menu-page").hasClass("d-none")) {
      setTimeout(() => {
        $(".menu-page").removeClass("d-none");
      }, 1);

      $(".top-menu").addClass("anim__slide-in-bottom");
      $(".bottom-menu").addClass("anim__slide-in-bottom");

      $(".top-menu").removeClass("anim__slide-out-bottom");
      $(".bottom-menu").removeClass("anim__slide-out-bottom");

      $(".menu-1").addClass("anim__slide-in-left");
      $(".menu-2").addClass("anim__slide-in-right");
      $(".menu-3").addClass("anim__slide-in-left");
      $(".menu-4").addClass("anim__slide-in-right");
      $(".menu-5").addClass("anim__slide-in-left");

      $(".menu-1").removeClass("anim__slide-out-left");
      $(".menu-2").removeClass("anim__slide-out-right");
      $(".menu-3").removeClass("anim__slide-out-left");
      $(".menu-4").removeClass("anim__slide-out-right");
      $(".menu-5").removeClass("anim__slide-out-left");

      $(".menu-page").addClass("blurred");

      $("body").css("overflowY", "hidden");

      $(".menu-button").attr("src", "./assets/img/menu/exit.png");
    } else {
      $(".menu-1").addClass("anim__slide-out-left");
      $(".menu-2").addClass("anim__slide-out-right");
      $(".menu-3").addClass("anim__slide-out-left");
      $(".menu-4").addClass("anim__slide-out-right");
      $(".menu-5").addClass("anim__slide-out-left");

      $(".menu-1").removeClass("anim__slide-in-left");
      $(".menu-2").removeClass("anim__slide-in-right");
      $(".menu-3").removeClass("anim__slide-in-left");
      $(".menu-4").removeClass("anim__slide-in-right");
      $(".menu-5").removeClass("anim__slide-in-left");

      setTimeout(() => {
        $(".top-menu").removeClass("anim__slide-in-bottom");
        $(".bottom-menu").removeClass("anim__slide-in-bottom");

        $(".top-menu").addClass("anim__slide-out-bottom");
        $(".bottom-menu").addClass("anim__slide-out-bottom");

        $(".menu-page").removeClass("blurred");

        $("body").css("overflowY", "auto");
      }, 200);

      setTimeout(() => {
        $(".menu-page").addClass("d-none");
      }, 700);

      $(".menu-button").attr("src", "./assets/img/menu/menu.png");
    }
  });

  $(".menu-1").on("click", function () {
    setTimeout(() => {
      $(".menu-button").trigger("click");
    }, 1);
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".what-indekos").offset().top,
      },
      500
    );
  });
  $(".menu-2").on("click", function () {
    setTimeout(() => {
      $(".menu-button").trigger("click");
    }, 1);
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#progress").offset().top,
      },
      500
    );
  });
  $(".menu-3").on("click", function () {
    setTimeout(() => {
      $(".menu-button").trigger("click");
    }, 1);
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#character").offset().top,
      },
      500
    );
  });
  $(".menu-4").on("click", function () {
    setTimeout(() => {
      $(".menu-button").trigger("click");
    }, 1);
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#teams__ceo").offset().top,
      },
      500
    );
  });
  $(".menu-5").on("click", function () {
    setTimeout(() => {
      $(".menu-button").trigger("click");
    }, 1);
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#social-medias").offset().top,
      },
      500
    );
  });

  $(".about-timeline").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".what-indekos").offset().top,
      },
      500
    );
  });

  $(".progress-timeline").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#progress").offset().top,
      },
      500
    );
  });

  $(".character-timeline").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#character").offset().top,
      },
      500
    );
  });

  $(".teams-timeline").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#teams__ceo").offset().top,
      },
      500
    );
  });

  $(".sosmed-timeline").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#social-medias").offset().top,
      },
      500
    );
  });

  $(".back__to-top").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
