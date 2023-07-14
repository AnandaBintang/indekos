const midgroundRoy = $(".midground-roy");
const midgroundDoni = $(".midground-doni");
const lampImage = ["./assets/img/staff-image/graffiti/flash.png", null];
var lebarViewport = $(window).width();
var xPosRoy = -540;
var xPosDoni = -340;
var yPos = 0;
var time = 0;
var stepDelayRoy = 1000;
var stepDelayDoni = 1200;
var randomValue = Math.random() * (5000 - 100) + 1;
var isRun = false;
const tooltip = {
  pre: {
    element: {
      0: ".pre-production__doni",
      1: ".pre-production__roy",
    },
    image: "pre-production.png",
    animation: {
      0: "pre-production__animation",
      1: "pre-production__animation",
    },
  },
  production: {
    element: {
      0: ".production__doni",
      1: ".production__roy",
    },
    image: "production.png",
    animation: {
      0: "production__animation-2",
      1: "production__animation-1",
    },
  },
  post: {
    element: {
      0: ".post-production__doni",
      1: null,
    },
    image: "post-production.png",
    animation: {
      0: "post-production__animation",
      1: null,
    },
  },
  launching: {
    element: {
      0: ".launching__roy",
      1: null,
    },
    image: "launching.png",
    animation: {
      0: "launching__animation",
      1: null,
    },
  },
};
const imageSets = [
  {
    selector: ".image-comic-1",
    sources: [
      "./assets/img/comic/series/eps1/1.jpg",
      "./assets/img/comic/series/eps1/2.jpg",
      "./assets/img/comic/series/eps1/3.jpg",
      "./assets/img/comic/series/eps1/4.jpg",
      "./assets/img/comic/series/eps1/5.jpg",
    ],
  },
  {
    selector: ".image-comic-2",
    sources: [
      "./assets/img/comic/series/eps2/1.jpg",
      "./assets/img/comic/series/eps2/2.jpg",
      "./assets/img/comic/series/eps2/3.jpg",
      "./assets/img/comic/series/eps2/4.jpg",
      "./assets/img/comic/series/eps2/5.jpg",
      "./assets/img/comic/series/eps2/6.jpg",
    ],
  },
  {
    selector: ".image-comic-3",
    sources: [
      "./assets/img/comic/series/eps3/1.jpg",
      "./assets/img/comic/series/eps3/2.jpg",
      "./assets/img/comic/series/eps3/3.jpg",
      "./assets/img/comic/series/eps3/4.jpg",
      "./assets/img/comic/series/eps3/5.jpg",
    ],
  },
  {
    selector: ".image-comic-4",
    sources: [
      "./assets/img/comic/series/eps4/1.jpg",
      "./assets/img/comic/series/eps4/2.jpg",
      "./assets/img/comic/series/eps4/3.jpg",
    ],
  },
];

$(document).ready(function () {
  // Daftar gambar lampu yang akan digunakan

  lampHandler();

  // Responsive Parallax
  const mediaQuery = window.matchMedia("(min-width: 992px)");
  if (mediaQuery.matches) {
    $("body").on("mousemove", function (event) {
      aboutParallax(event);
    });

    $(window).scroll(function (e) {
      const scrollPosition = $(window).scrollTop();
      const windowHeight = $(window).height();
      const progressSelector = {
        contentSelector: ".content",
        aboutSelector: ".what-indekos",
        progressSelector: ".loading-progress",
        characterSelector: ".image-comic-4",
        teamsSelector: "#teams",
        socialMediaSelector: ".footer-background",
      };
      updatePageProgress(scrollPosition, windowHeight, progressSelector);
    });

    $(document).mousemove(function (e) {
      progressPointerHandler();
      tooltipElement(e, true);
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
        disableScroll();
      })
      .on("mouseout", function () {
        $(".social-media__finger").css({
          transition: "all 1s ease-in-out",
          left: "27%",
          top: "10%",
        });
        enableScroll();
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
    tooltipElement(null, false);
  }

  for (const imageSet of imageSets) {
    openImageLightbox(imageSet.selector, imageSet.sources);
  }

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

$(window).resize(function () {
  lebarViewport = $(window).width();
});
