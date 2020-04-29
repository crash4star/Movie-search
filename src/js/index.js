import '../css/style.css';
import '../css/style.scss';
import 'jquery';
import 'popper.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const owl = document.querySelector('.owl-carousel');

if (owl) {
  $(document).ready(function () {
    $('#owl-2 .owl-carousel').owlCarousel({
      margin: 5,
      stagePadding: 50,
      loop: true,
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
          items: 3
        }
      }
    });

  });
}