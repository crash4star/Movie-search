import localStorageItem from "../options-functions/local-storage-get-set";
import sliderloadnextpage from "./slider-load-next-page";

function sliderConfig(arr) {
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        slidesPerView: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        dots: true,
        loop: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            1240: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    if (localStorageItem('get', 'start-page') !== true) {
        swiper.removeAllSlides();
        swiper.update();
    }

    setTimeout(() => {
        swiper.appendSlide(arr);
        swiper.update();
        setTimeout(() => {
            swiper.slideToLoop(0, false, false);
        }, 300);
    }, 600);

    sliderloadnextpage(swiper);
}

export default sliderConfig;