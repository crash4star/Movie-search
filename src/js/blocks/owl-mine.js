function mineOwlCarousel() {
  const owl = document.querySelector('.owl-carousel');

  if (owl) {
    $(document).ready(function () {
      $('#owl-2 .owl-carousel').owlCarousel({
        margin: 40,
        loop: false,
        navSpeed: 500,
        dots: true,
        dotsEach: true,
        nav: true,
        navText: ['', ''],
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 2
          }
        }
      });

    });
  }
}

export default mineOwlCarousel;