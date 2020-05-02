function mineOwlCarousel() {
  const owl = document.querySelector('.owl-carousel');

  if (owl) {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: false,
        navSpeed: 500,
        dots: true,
        dotsEach: true,
        nav: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          1199: {
            items: 1,
            nav: true
          },
          1200: {
            items: 2,
            nav: true,
          }
        }
      });

    });
  }
}

export default mineOwlCarousel;