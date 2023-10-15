(function ($) {
  "use strict";

  // menu
  $(".siteBar-btn").click(function () {
    $(".mobile-menu").toggleClass("siteBar");
  });

  // owlCarousel for hero section
  $(".hero_slider_wrapper").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    // autoplay: 1000, // time for slides changes
    smartSpeed: 1000, // duration of change of 1 slide
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">',
    ],
    nav: true,
    dots: false
  });

  // owlCarousel for card
  $(".card-slider-area ").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // owlCarousel for tetimonial
  $(".testimonial_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">',
    ],
    nav: true,
    dots: false
  });


  // vedeo popup
  new VenoBox({
    selector: ".my-link",
  });


})(jQuery);
