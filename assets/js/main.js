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
  } else {
    $(".main-visual").removeAttr("data-tilt");
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
