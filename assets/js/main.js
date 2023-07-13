$(window).on("load", function () {
  preloader();
});
$(document).ready(function () {
  let menu, menuButton, backButton;

  menu = {
    menuButtonSelector: ".menu-button",
    menuPageSelector: ".menu-page",
    topMenuSelector: ".top-menu",
    bottomMenuSelector: ".bottom-menu",
    menuItemsCount: 5,
    menuButtonImageSrc: [
      "./assets/img/menu/menu.png",
      "./assets/img/menu/exit.png",
    ],
  };
  menuButton = {
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
  backButton = ".back-button";

  menuHandler(menu);
  backBtnHandler(backButton);
  menuBtnHandler(menuButton);
});
