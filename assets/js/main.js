var menuButton = {
  menu_1: {
    isClicked: ".menu-1",
    scrollTo: ".what-indekos",
    waitFor: true,
  },
  menu_2: {
    isClicked: ".menu-2",
    scrollTo: "#progress",
    waitFor: true,
  },
  menu_3: {
    isClicked: ".menu-3",
    scrollTo: "#character",
    waitFor: true,
  },
  menu_4: {
    isClicked: ".menu-4",
    scrollTo: "#teams",
    waitFor: true,
  },
  menu_5: {
    isClicked: ".menu-5",
    scrollTo: "#social-medias",
    waitFor: true,
  },
  timeline_1: {
    isClicked: ".about-timeline",
    scrollTo: ".what-indekos",
    waitFor: false,
  },
  timeline_2: {
    isClicked: ".progress-timeline",
    scrollTo: "#progress",
    waitFor: false,
  },
  timeline_3: {
    isClicked: ".character-timeline",
    scrollTo: "#character",
    waitFor: false,
  },
  timeline_4: {
    isClicked: ".teams-timeline",
    scrollTo: "#teams",
    waitFor: false,
  },
  timeline_5: {
    isClicked: ".sosmed-timeline",
    scrollTo: "#social-medias",
    waitFor: false,
  },
  back_top: {
    isClicked: ".back__to-top",
    scrollTo: "body",
    waitFor: false,
  },
};

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
      for (var i = 1; i <= 5; i++) {
        let animIn, animOut;
        if (i % 2 == 0) {
          animIn = "anim__slide-in-right";
          animOut = "anim__slide-out-right";
        } else {
          animIn = "anim__slide-in-left";
          animOut = "anim__slide-out-left";
        }
        $(`.menu-${i}`).addClass(animIn);
        $(`.menu-${i}`).removeClass(animOut);
      }
      $(".menu-page").addClass("blurred");
      $("body").css("overflowY", "hidden");
      $(".menu-button").attr("src", "./assets/img/menu/exit.png");
    } else {
      for (var i = 1; i <= 5; i++) {
        let animOut, animIn;
        if (i % 2 == 0) {
          animIn = "anim__slide-in-right";
          animOut = "anim__slide-out-right";
        } else {
          animIn = "anim__slide-in-left";
          animOut = "anim__slide-out-left";
        }
        $(`.menu-${i}`).addClass(animOut);
        $(`.menu-${i}`).removeClass(animIn);
      }
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

  $(".back-button").on("click", function () {
    history.back();
  });

  Object.keys(menuButton).forEach(function (key) {
    const value = menuButton[key];
    menuClicked(value.isClicked, value.scrollTo, value.waitFor);
  });
});

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

function menuClicked(isClicked, scrollTo, waitFor) {
  $(isClicked).on("click", function () {
    if (waitFor) {
      setTimeout(() => {
        $(".menu-button").trigger("click");
      }, 1);
    }
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(scrollTo).offset().top,
      },
      500
    );
  });
}
