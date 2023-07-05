var position = {};

$(document).ready(function () {
  // Responsive Parallax
  const mediaQuery = window.matchMedia("(min-width: 992px)");
  if (mediaQuery.matches) {
    // About Parallax
    var b = document.getElementsByTagName("body")[0];
    b.addEventListener("mousemove", function (event) {
      aboutParallax(event);
    });

    $(window).scroll(function (e) {
      let scroll = $(window).scrollTop() + $(window).height();
      let content = $(".content").offset().top;
      let about = $(".what-indekos").offset().top;
      let progress = $(".loading-progress").offset().top;
      let character = $(".image-comic-4").offset().top;
      let teams = $("#teams__storyboard").offset().top;
      let socialMedia = $(".footer-background").offset().top;

      if (scroll - $(window).height() >= content) {
        $(".page-progress").css("left", "0");
      } else {
        $(".page-progress").css("left", "-200px");
      }

      if (scroll >= about) {
        $(".about-timeline")
          .addClass("active")
          .siblings("li")
          .removeClass("active");
      }
      if (scroll >= progress) {
        $(".progress-timeline")
          .addClass("active")
          .siblings("li")
          .removeClass("active");
      }
      if (scroll >= character) {
        $(".character-timeline")
          .addClass("active")
          .siblings("li")
          .removeClass("active");
      }
      if (scroll >= teams) {
        $(".teams-timeline")
          .addClass("active")
          .siblings("li")
          .removeClass("active");
      }
      if (scroll >= socialMedia) {
        $(".sosmed-timeline")
          .addClass("active")
          .siblings("li")
          .removeClass("active");
      }
    });

    $(document).mousemove(function (e) {
      $("#tooltip").css({
        left: e.pageX,
        top: e.pageY + 50,
      });

      // Progress Pointer
      $(".progress-pointer")
        .on("mouseover", function () {
          $(this).addClass("progress-pointer__animation");
        })
        .on("mouseout", function () {
          $(this).removeClass("progress-pointer__animation");
        });

      // Pre Production
      $(".pre-production__doni")
        .on("mouseover", function () {
          $(this).addClass("pre-production__animation");
          $(".pre-production__roy").addClass("pre-production__animation");
          $("#tooltip").removeClass("d-none");
          $("#tooltip").attr("src", "./assets/img/tooltip/pre-production.png");
        })
        .on("mouseout", function () {
          $(this).removeClass("pre-production__animation");
          $(".pre-production__roy").removeClass("pre-production__animation");
          $("#tooltip").addClass("d-none");
          $("#tooltip").removeAttr("src");
        });

      // Production
      $(".production__doni")
        .on("mouseover", function () {
          $(this).addClass("production__animation-2");
          $(".production__roy").addClass("production__animation-1");
          $("#tooltip").removeClass("d-none");
          $("#tooltip").attr("src", "./assets/img/tooltip/production.png");
        })
        .on("mouseout", function () {
          $(this).removeClass("production__animation-2");
          $(".production__roy").removeClass("production__animation-1");
          $("#tooltip").addClass("d-none");
          $("#tooltip").removeAttr("src");
        });

      // Post Production
      $(".post-production__doni")
        .on("mouseover", function () {
          $(this).addClass("post-production__animation");
          $("#tooltip").removeClass("d-none");
          $("#tooltip").attr("src", "./assets/img/tooltip/post-production.png");
        })
        .on("mouseout", function () {
          $(this).removeClass("post-production__animation");
          $("#tooltip").addClass("d-none");
          $("#tooltip").removeAttr("src");
        });

      // Launching
      $(".launching__roy")
        .on("mouseover", function () {
          $(this).addClass("launching__animation");
          $("#tooltip").removeClass("d-none");
          $("#tooltip").attr("src", "./assets/img/tooltip/launching.png");
        })
        .on("mouseout", function () {
          $(this).removeClass("launching__animation");
          $("#tooltip").addClass("d-none");
          $("#tooltip").removeAttr("src");
        });
    });

    // Social Media
    $(".social-media__phone-container")
      .on("mouseover", function () {
        $(this).mousemove(function (e) {
          $(".social-media__finger").css({
            transition: "none",
            left: e.pageX * (97 / 100),
            top: (e.pageY - $("#social-medias").offset().top) * (110 / 100),
          });
        });
      })
      .on("mouseout", function () {
        $(".social-media__finger").css({
          transition: "all 1s ease-in-out",
          left: "27%",
          top: "20%",
        });
      });
    $(".social-media__icon-instagram")
      .on("mouseover", function () {
        $(".social-media__hover").removeClass("d-none");
      })
      .on("mouseout", function () {
        $(".social-media__hover").addClass("d-none");
      });
  } else {
    $(".page-progress").addClass("d-none");

    $(".pre-production__doni")
      .on("mouseover", function (e) {
        $("#tooltip").css({
          left: $(".pre-production__doni").position().left + 30,
          top: `${e.pageY + 15}px`,
        });

        $("#tooltip").removeClass("d-none");
        $("#tooltip").attr("src", "./assets/img/tooltip/pre-production.png");
      })
      .on("mouseout", function () {
        $("#tooltip").addClass("d-none");
        $("#tooltip").removeAttr("src");
      });

    $(".production__doni")
      .on("mouseover", function (e) {
        $("#tooltip").css({
          left: $(".production__doni").position().left + 30,
          top: `${e.pageY + 15}px`,
        });

        $("#tooltip").removeClass("d-none");
        $("#tooltip").attr("src", "./assets/img/tooltip/production.png");
      })
      .on("mouseout", function () {
        $("#tooltip").addClass("d-none");
        $("#tooltip").removeAttr("src");
      });

    $(".post-production__doni")
      .on("mouseover", function (e) {
        $("#tooltip").css({
          left: $(".post-production__doni").position().left + 30,
          top: `${e.pageY + 15}px`,
        });

        $("#tooltip").removeClass("d-none");
        $("#tooltip").attr("src", "./assets/img/tooltip/post-production.png");
      })
      .on("mouseout", function () {
        $("#tooltip").addClass("d-none");
        $("#tooltip").removeAttr("src");
      });

    $(".launching__roy")
      .on("mouseover", function (e) {
        $("#tooltip").css({
          left: $(".launching__roy").position().left + 30,
          top: `${e.pageY + 15}px`,
        });

        $("#tooltip").removeClass("d-none");
        $("#tooltip").attr("src", "./assets/img/tooltip/launching.png");
      })
      .on("mouseout", function () {
        $("#tooltip").addClass("d-none");
        $("#tooltip").removeAttr("src");
      });
  }

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

  position = {
    top_1: "10%",
    top_2: "55%",
    top_3: "-45%",
    top_4: "100%",
    top_5: "-30%",
    left_1: "51%",
    left_2: "51%",
    left_3: "70%",
    left_4: "63%",
    left_5: "57%",
    idle_top: "40%",
    idle_left: "70%",
  };

  characterHover(position);

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

  // Comic
  $(".image-comic-1").on("click", function () {
    var lightbox = new FsLightbox();
    lightbox.props.sources = [
      "./assets/img/comic/series/eps4/a.jpg",
      "./assets/img/comic/series/eps4/b.jpg",
      "./assets/img/comic/series/eps4/c.jpg",
      "./assets/img/comic/series/eps4/d.jpg",
      "./assets/img/comic/series/eps4/e.jpg",
    ];
    lightbox.open();
  });
  $(".image-comic-2").on("click", function () {
    var lightbox = new FsLightbox();
    lightbox.props.sources = [
      "./assets/img/comic/series/eps2/b.jpg",
      "./assets/img/comic/series/eps2/c.jpg",
      "./assets/img/comic/series/eps2/d.jpg",
      "./assets/img/comic/series/eps2/e.jpg",
      "./assets/img/comic/series/eps2/f.jpg",
      "./assets/img/comic/series/eps2/g.jpg",
    ];
    lightbox.open();
  });
  $(".image-comic-3").on("click", function () {
    var lightbox = new FsLightbox();
    lightbox.props.sources = [
      "./assets/img/comic/series/eps1/A.jpg",
      "./assets/img/comic/series/eps1/B.jpg",
      "./assets/img/comic/series/eps1/C.jpg",
      "./assets/img/comic/series/eps1/D.jpg",
      "./assets/img/comic/series/eps1/E.jpg",
    ];
    lightbox.open();
  });
  $(".image-comic-4").on("click", function () {
    var lightbox = new FsLightbox();
    lightbox.props.sources = [
      "./assets/img/comic/series/eps3/a.jpg",
      "./assets/img/comic/series/eps3/b.jpg",
      "./assets/img/comic/series/eps3/c.jpg",
    ];
    lightbox.open();
  });
  $(".image-comic-5").on("click", function () {
    window.open("https://www.instagram.com/indekos_/", "_blank");
  });

  // Social Media
  $(".social-media__icon-instagram").on("click", function () {
    window.open("https://www.instagram.com/indekos_/", "_blank");
  });

  // Kos
  $(".character-kos").on("click", function () {
    location.href = "./character.html";
  });
});

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

// function
function aboutParallax(e) {
  var amountMovedX = (e.clientX * -0.4) / 10;
  var amountMovedY = (e.clientY * -0.4) / 10;
  var x = document.getElementsByClassName("about-indekos");
  var i;
  for (i = 0; i < x.length; i++) {
    // About Parallax
    $(".img-about-1").css(
      "transform",
      `translate(${amountMovedX * -0.3}px, ${amountMovedY * -0.3}px)`
    );
    $(".img-about-2").css(
      "transform",
      `translate(${amountMovedX * -0.4}px, ${amountMovedY * -0.4}px)`
    );
    $(".img-about-3").css(
      "transform",
      `translate(${amountMovedX * -0.7}px, ${amountMovedY * -0.7}px)`
    );
    $(".img-about-4").css(
      "transform",
      `translate(${amountMovedX * -0.9}px, ${amountMovedY * -0.9}px)`
    );
    $(".img-about-5").css(
      "transform",
      `translate(${amountMovedX * -1.1}px, ${amountMovedY * -1.1}px)`
    );
    $(".img-about-6").css(
      "transform",
      `translate(${amountMovedX * -1.2}px, ${amountMovedY * -1.2}px)`
    );
    $(".img-about-7").css(
      "transform",
      `translate(${amountMovedX * -0.3}px, ${amountMovedY * -0.3}px)`
    );
  }
}

function characterHover(position) {
  $(".character-kos")
    .on("mouseover", function () {
      $(".character__additional").removeClass("d-none");

      setTimeout(() => {
        $(".character__additional-1").css({
          top: position.top_1,
          left: position.left_1,
        });
        $(".character__additional-2").css({
          top: position.top_2,
          left: position.left_2,
        });
        $(".character__additional-3").css({
          top: position.top_3,
          left: position.left_3,
        });
        $(".character__additional-4").css({
          top: position.top_4,
          left: position.left_4,
        });
        $(".character__additional-5").css({
          top: position.top_5,
          left: position.left_5,
        });
      }, 50);
    })
    .on("mouseout", function () {
      $(".character__additional-1").css({
        top: position.idle_top,
        left: position.idle_left,
      });
      $(".character__additional-2").css({
        top: position.idle_top,
        left: position.idle_left,
      });
      $(".character__additional-3").css({
        top: position.idle_top,
        left: position.idle_left,
      });
      $(".character__additional-4").css({
        top: position.idle_top,
        left: position.idle_left,
      });
      $(".character__additional-5").css({
        top: position.idle_top,
        left: position.idle_left,
      });

      setTimeout(() => {
        $(".character__additional").addClass("d-none");
      }, 100);
    });
}
