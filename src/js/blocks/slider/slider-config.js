import localStorageItem from "../options-functions/local-storage-get-set";
import sliderLoadNextPage from "./slider-load-next-page";
import sliderFixStyle from "../movies/movies-card-fix-style";

const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slidesPerView: 2,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
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


swiper.on('slideChange', () => {
    if (swiper.activeIndex === swiper.slides.length - 3 && localStorageItem('get', 'request')) {
        localStorageItem('set', 'request-page', localStorageItem('get', 'request-page') + 1);
        sliderLoadNextPage();
    }
})

function sliderConfig(movie) {
    setTimeout(() => {
        swiper.appendSlide(movie);
        swiper.update();
        setTimeout(() => {
            sliderFixStyle();
        }, 300);
    }, 500);


    if (localStorageItem('get', 'remove-slides')) {
        swiper.removeAllSlides();
        swiper.update();
    }
    // sliderloadnextpage(swiper);
}

export default sliderConfig;