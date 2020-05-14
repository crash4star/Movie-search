import Swiper from 'swiper';
import sendRequest from "../options-functions/send-request";
import localStorageItem from "../options-functions/local-storage-get-set";
import 'swiper/css/swiper.min.css';
import sliderConfig from "../slider/slider-config";
import sliderFixStyle from "./movies-card-fix-style";

function moviesCreateCards(request) {

  const swiperContainer = document.querySelector('.swiper-container');
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperContainer.classList.remove('d-none');
  const moviesArr = [];

  const fullMovieDescription = `https://www.omdbapi.com/?t=$${localStorageItem('get', request)}&post=full&&apikey=c8ff1116`;

  sendRequest('GET', fullMovieDescription)
    .then(res => {
      if (res.Title !== undefined) {
        moviesArr.push(`
          <div class="swiper-slide">
            <div class="movies-wrapper-item">
                <p class="movies-wrapper-rating">${res.imdbRating}</p>
                <div class="movies-wrapper-poster">
                    <button class="movies-wrapper-add-list-btn added-in-list"><i class="fas fa-heart"></i></button>
                    <div class="movies-wrapper-poster-src" style="background-image: url('${res.Poster}')"></div>
                    <div class="movies-wrapper-rated-time">
                        <p class="movies-wrapper-time">${res.Runtime}</p>
                    </div>
                    <div class="movies-wrapper-genre">
                      <p class="movies-wrapper-genre-item">${res.Genre}</p>
                    </div>
                </div>
                <div class="movies-wrapper-info">
                    <p class="movies-wrapper-year">${res.Year}</p>
                    <a href="https://www.imdb.com/title/${res.imdbID}" class="movies-wrapper-title">${res.Title}</a>
                    <p class="movies-wrapper-desc">${res.Plot}</p>
                    <p class="movies-wrapper-director">${res.Director}</p>
                    <div class="movies-wrapper-starring">
                      <p class="movies-wrapper-star">${res.Actors}</p>
                    </div>
                </div>
            </div>
          </div>
      `);
      }
    })
    .then(() => sliderConfig(moviesArr))
    .catch(err => console.log(err));
  
  setTimeout(() => {
    sliderFixStyle();
  }, 300);
}

export default moviesCreateCards;