function preloader() {
  $("#preloader").css({
    opacity: "0",
    transition: "all 1s ease",
  });
  setTimeout(() => {
    $("#preloader").remove();
    $("#logo").removeClass("d-none");
    $("#logo").addClass("bounce-top");
  }, 500);
}
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
function pageProgress(element, walking) {
  $(element).addClass("active").siblings("li").removeClass("active");

  if (walking) {
    if (!isRun) {
      isRun = true;
      setTimeout(() => {
        walkingAnimation();
      }, randomValue);
    }
  }
}
function updatePageProgress(scroll, windowHeight, selector) {
  let content, about, progress, character, teams, socialMedia;
  scroll = scroll + windowHeight;
  content = $(selector.contentSelector).offset().top;
  about = $(selector.aboutSelector).offset().top;
  progress = $(selector.progressSelector).offset().top;
  character = $(selector.characterSelector).offset().top;
  teams = $(selector.teamsSelector).offset().top;
  socialMedia = $(selector.socialMediaSelector).offset().top;

  if (scroll - windowHeight >= content) {
    $(".page-progress").css("top", "19%");
  } else {
    $(".page-progress").css("top", "0%");
  }

  if (scroll >= about) {
    pageProgress(".about-timeline", false);
  }
  if (scroll >= progress) {
    pageProgress(".progress-timeline", false);
  }
  if (scroll >= character) {
    pageProgress(".character-timeline", false);
  }
  if (scroll - windowHeight >= teams) {
    pageProgress(".teams-timeline", true);
  }
  if (scroll >= socialMedia) {
    pageProgress(".sosmed-timeline", false);
  }
}
function menuHandler(menu) {
  $(menu.menuButtonSelector).on("click", function () {
    if ($(menu.menuPageSelector).hasClass("d-none")) {
      setTimeout(() => {
        $(menu.menuPageSelector).removeClass("d-none");
      }, 1);
      $(menu.topMenuSelector).addClass("anim__slide-in-bottom");
      $(menu.bottomMenuSelector).addClass("anim__slide-in-bottom");
      $(menu.topMenuSelector).removeClass("anim__slide-out-bottom");
      $(menu.bottomMenuSelector).removeClass("anim__slide-out-bottom");
      for (var i = 1; i <= menu.menuItemsCount; i++) {
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
      $(menu.menuPageSelector).addClass("blurred");
      $("body").css("overflowY", "hidden");
      $(menu.menuButtonSelector).attr("src", menu.menuButtonImageSrc[1]);
    } else {
      for (var i = 1; i <= menu.menuItemsCount; i++) {
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
        $(menu.topMenuSelector).removeClass("anim__slide-in-bottom");
        $(menu.bottomMenuSelector).removeClass("anim__slide-in-bottom");
        $(menu.topMenuSelector).addClass("anim__slide-out-bottom");
        $(menu.bottomMenuSelector).addClass("anim__slide-out-bottom");
        $(menu.menuPageSelector).removeClass("blurred");
        $("body").css("overflowY", "auto");
      }, 200);
      setTimeout(() => {
        $(menu.menuPageSelector).addClass("d-none");
      }, 700);
      $(menu.menuButtonSelector).attr("src", menu.menuButtonImageSrc[0]);
    }
  });
}
function menuBtnHandler(button) {
  Object.keys(button).forEach(function (key) {
    const value = button[key];
    menuBtnClicked(value.isClicked, value.scrollTo, value.waitFor);
  });
}
function menuBtnClicked(isClicked, scrollTo, waitFor) {
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
function backBtnHandler(button) {
  $(button).on("click", function () {
    history.back();
  });
}
function aboutParallax(e) {
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
function progressPointerHandler() {
  $(".progress-pointer")
    .on("mouseover", function () {
      $(this).addClass("progress-pointer__animation");
    })
    .on("mouseout", function () {
      $(this).removeClass("progress-pointer__animation");
    });
}
function tooltipElement(pagePosition, isAnimated) {
  let animation = null;
  if (pagePosition) {
    $("#tooltip").css({
      left: pagePosition.pageX,
      top: pagePosition.pageY + 50,
    });
  }

  Object.keys(tooltip).forEach(function (key) {
    const value = tooltip[key];
    if (isAnimated) animation = value.animation;
    showTooltip(value.element, value.image, animation);
  });
}
function showTooltip(element, image, animation) {
  $(element[0])
    .on("mouseover", function (e) {
      if (animation) {
        $(element[0]).addClass(animation[0]);
        $(element[1]).addClass(animation[1]);
      } else {
        $("#tooltip").css({
          left: $(element[0]).position().left + 30,
          top: `${e.pageY + 15}px`,
        });
      }

      $("#tooltip").removeClass("d-none");
      $("#tooltip").attr("src", `./assets/img/tooltip/${image}`);
    })
    .on("mouseout", function () {
      if (animation) {
        $(element[0]).removeClass(animation[0]);
        $(element[1]).removeClass(animation[1]);
      }
      $("#tooltip").addClass("d-none");
      $("#tooltip").removeAttr("src");
    });
}
function lampHandler() {
  var lamp = $("#flash");
  var randomImage = lampImage[Math.floor(Math.random() * lampImage.length)];
  lamp.attr("src", randomImage);

  var randomDelay = Math.random() * 2000 + 1000;
  lamp.css("opacity", 0.6);

  if (randomImage === null) {
    setTimeout(function () {
      lamp.css("opacity", 0);
    }, 200);
  }

  setTimeout(lampHandler, randomDelay);
}
function walkingAnimation() {
  xPosRoy += 2;
  xPosDoni += 2;

  yPosRoy = Math.sin(time * 0.1 + 1) * 10;
  yPosDoni = Math.sin(time * 0.1) * 10;
  time++;

  midgroundRoy.css(
    "transform",
    "translate(" + xPosRoy + "px, " + yPosRoy + "px)"
  );
  midgroundDoni.css(
    "transform",
    "translate(" + xPosDoni + "px, " + yPosDoni + "px)"
  );

  requestAnimationFrame(walkingAnimation);
}

function openImageLightbox(imageSelector, imageSources) {
  $(imageSelector).on("click", function () {
    var lightbox = new FsLightbox();
    lightbox.props.sources = imageSources;
    lightbox.open();
  });
}
function setItemSlider(index) {
  selected_item = index;

  slider_items.each(function (idx) {
    let offset = idx - selected_item;
    if (offset < 0) offset += slider_items.length;

    for (let i = 0; i < slider_items.length + 1; i++) {
      $(this)
        .removeClass(`item-${i}`)
        .addClass(`item-${offset + 1}`);
    }
  });
  let title = $(".item-1 img").attr("alt");
  $(".item-1 img").attr("src", `./assets/img/character/${title}/main.png`);
  $(".character-name").addClass("anim__scale-out-center");
  $(".detail-container").addClass("anim__slide-out-left");

  setTimeout(() => {
    $(".character-name").attr(
      "src",
      `./assets/img/character/${title}/nametag.png`
    );
    $(".character-name").removeClass("anim__scale-out-center");
    $(".character-name").addClass("anim__scale-in-center");

    $(".detail-container img").attr(
      "src",
      `./assets/img/character/${title}/detail.png`
    );
    $(".detail-container").removeClass("anim__slide-out-left");
    $(".detail-container").addClass("anim__slide-in-left");
  }, 300);

  $(".detail-container").removeClass("anim__slide-in-left");
  $(".character-name").removeClass("anim__scale-in-center");

  for (let i = 2; i <= 4; i++) {
    let title = $(`.item-${i} img`).attr("alt");
    $(`.item-${i} img`).attr(
      "src",
      `./assets/img/character/${title}/siluet.png`
    );
  }
}
