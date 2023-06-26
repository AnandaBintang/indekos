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
    $("#social-media").mousemove(function (e) {
      $(".social-media__finger").css({
        left: e.pageX * (97 / 100),
        top: (e.pageY - $("#social-media").offset().top) * (110 / 100),
      });
    });
  } else {
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

      $(".menu-1").removeClass("anim__slide-out-left");
      $(".menu-2").removeClass("anim__slide-out-right");
      $(".menu-3").removeClass("anim__slide-out-left");

      $(".menu-page").addClass("blurred");

      $("body").css("overflowY", "hidden");

      $(".menu-button").attr("src", "./assets/img/exit.png");
    } else {
      $(".menu-1").addClass("anim__slide-out-left");
      $(".menu-2").addClass("anim__slide-out-right");
      $(".menu-3").addClass("anim__slide-out-left");

      $(".menu-1").removeClass("anim__slide-in-left");
      $(".menu-2").removeClass("anim__slide-in-right");
      $(".menu-3").removeClass("anim__slide-in-left");

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

      $(".menu-button").attr("src", "./assets/img/menu.png");
    }
  });

  // Comic
  $(".comic-1")
    .on("mouseover", function () {
      $(".image-comic-1").css("scale", "1.1");
    })
    .on("mouseout", function () {
      $(".image-comic-1").css("scale", "1");
    });
  $(".comic-2")
    .on("mouseover", function () {
      $(".image-comic-2").css("scale", "1.1");
    })
    .on("mouseout", function () {
      $(".image-comic-2").css("scale", "1");
    });
  $(".comic-3")
    .on("mouseover", function () {
      $(".image-comic-3").css("scale", "1.1");
    })
    .on("mouseout", function () {
      $(".image-comic-3").css("scale", "1");
    });
  $(".comic-4")
    .on("mouseover", function () {
      $(".image-comic-4").css("scale", "1.1");
    })
    .on("mouseout", function () {
      $(".image-comic-4").css("scale", "1");
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
