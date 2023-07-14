const mediaQueryPc = window.matchMedia("(min-width: 992px)");
const mediaQueryTab = window.matchMedia("(min-width: 500px)");
const slider_items = $(".slider-items li");
const nav_next = $(".slider-nav.next");
const nav_prev = $(".slider-nav.prev");
let selected_item = 0;

slider_items.click(function () {
  setItemSlider($(this).index());
});

nav_next.click(function () {
  selected_item = selected_item < slider_items.length - 1 ? ++selected_item : 0;
  setItemSlider(selected_item);
});

nav_prev.click(function () {
  selected_item =
    selected_item >= 1 ? --selected_item : slider_items.length - 1;
  setItemSlider(selected_item);
});

if (mediaQueryPc.matches) {
  $(".character-background").attr(
    "src",
    "./assets/img/background/character-border.png"
  );
} else if (mediaQueryTab.matches) {
  $(".character-background").attr(
    "src",
    "./assets/img/background/character-border-tablet.png"
  );
} else {
  $(".character-background").attr(
    "src",
    "./assets/img/background/character-border-mobile.png"
  );
}
