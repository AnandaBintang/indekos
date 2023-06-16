$(document).ready(function () {
  // Responsive Parallax
  const mediaQuery = window.matchMedia("(min-width: 992px)");
  if (mediaQuery.matches) {
    // About Parallax
    var b = document.getElementsByTagName("body")[0];
    b.addEventListener("mousemove", function (event) {
      parallaxed(event);
    });
    function parallaxed(e) {
      var amountMovedX = (e.clientX * -0.4) / 10;
      var amountMovedY = (e.clientY * -0.4) / 10;
      var x = document.getElementsByClassName("about-indekos");
      var i;
      for (i = 0; i < x.length; i++) {
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
  }
  // Menu
  $(".hamburger-menu").on("click", function () {
    alert("Coming Soon!");
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
