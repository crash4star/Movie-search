function mineOwlCarousel() {
  const owl = document.querySelector('.owl-carousel');

  if (owl) {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        margin: 15,
        loop: false,
        navSpeed: 500,
        dots: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
          },
          768: {
            items: 1,
            nav: true
          },
          1214: {
            items: 2,
            nav: true,
          },
          1280: {
            items: 2,
            nav: true,
            dotsEach: false
          }
        }
      });

    });
  }
}

export default mineOwlCarousel;