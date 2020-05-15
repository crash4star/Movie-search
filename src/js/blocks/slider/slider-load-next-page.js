import localStorageItem from "../options-functions/local-storage-get-set";
import sendRequest from "../options-functions/send-request";
import sliderConfig from "./slider-config";
import moviePop from "../movies/movie-pop";

function sliderLoadNextPage() {
  const loader = document.querySelector('.cs-loader');
  const swiperContainer = document.querySelector('.swiper-container');
  if (localStorageItem('get', 'next-page')) {
    sendRequest('GET', `https://www.omdbapi.com/?s=${localStorageItem('get', 'request')}&page=${localStorageItem('get', 'request-page')}&apikey=23356196`)
      .then(data => {
        loader.classList.remove('d-none')
        swiperContainer.classList.add('load-next');
        data.Search.forEach(item => {
          sendRequest('GET', `https://www.omdbapi.com/?t=$${item.Title}&post=full&&apikey=23356196`)
            .then(movie => {
              if (movie.Title !== 'undefined' && movie.Title !== undefined) {
                sliderConfig(`<div class="swiper-slide">
                  <div class="movies-wrapper-item">
                      <p class="movies-wrapper-rating">${movie.imdbRating}</p>
                      <div class="movies-wrapper-poster">
                          <button class="movies-wrapper-add-list-btn added-in-list"><i class="fas fa-heart"></i></button>
                          <div class="movies-wrapper-poster-src" style="background-image: url('${movie.Poster}')"></div>
                          <div class="movies-wrapper-rated-time">
                              <p class="movies-wrapper-time">${movie.Runtime}</p>
                          </div>
                          <div class="movies-wrapper-genre">
                            <p class="movies-wrapper-genre-item">${movie.Genre}</p>
                          </div>
                      </div>
                      <div class="movies-wrapper-info">
                          <p class="movies-wrapper-year">${movie.Year}</p>
                          <a href="https://www.imdb.com/title/${movie.imdbID}" class="movies-wrapper-title">${movie.Title}</a>
                          <p class="movies-wrapper-desc">${movie.Plot}</p>
                          <p class="movies-wrapper-director">${movie.Director}</p>
                          <div class="movies-wrapper-starring">
                            <p class="movies-wrapper-star">${movie.Actors}</p>
                          </div>
                      </div>
                  </div>
                </div>`);
              }
            })
        });

      })
      .then(() => {
        setTimeout(() => {
          loader.classList.add('d-none')
          swiperContainer.classList.remove('load-next');
        }, 1000)
      })
      .catch(() => {
        moviePop('This was the last slide')
        loader.classList.add('d-none')
        swiperContainer.classList.remove('load-next');
      })
  }
}

export default sliderLoadNextPage;