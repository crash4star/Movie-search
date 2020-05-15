import sendRequest from "../options-functions/send-request";
import localStorageItem from "../options-functions/local-storage-get-set";
import 'swiper/css/swiper.min.css';
import sliderConfig from "../slider/slider-config";
import moviePop from "./movie-pop";

function moviesCreateCards(requestArr) {

  const swiperContainer = document.querySelector('.swiper-container');
  const searchInput = document.querySelector('#input-search');
  const loader = document.querySelector('.cs-loader');
  swiperContainer.classList.remove('d-none');
  let requestUrl = '';


  function getFullMovieCard() {
    sendRequest('GET', requestUrl)
      .then(data => {
        swiperContainer.classList.add('hide-opacity');
        loader.classList.remove('d-none')
        data.Search.forEach(movieTitle => {
          sendRequest('GET', `https://www.omdbapi.com/?t=$${movieTitle.Title}&post=full&&apikey=23356196`)
            .then(movie => {
              if (movie.Title !== undefined) {
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
            });
        });
      })
      .then(() => setTimeout(() => {
        swiperContainer.classList.remove('hide-opacity')
        loader.classList.add('d-none')
      }, 1000))
      .catch(() => {
        moviePop(`No results for "${searchInput.value}"`)
        loader.classList.add('d-none')
        swiperContainer.classList.remove('hide-opacity')
      })
  }
  
  requestArr.forEach(getRequest => {
    if (getRequest.search(/[А-яЁё]/) !== -1) {

      const translateApi = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text=${getRequest}&lang=ru-en`;
      sendRequest('GET', translateApi)
        .then(data => {
          localStorageItem('set', 'request', getRequest);
          swiperContainer.classList.add('hide-opacity')
          requestUrl = `https://www.omdbapi.com/?s=${data.text.join('')}&page=${localStorageItem('get', 'request-page')}&apikey=23356196`;
          getFullMovieCard();
          moviePop(`Showing results for "${searchInput.value}"`)  
        })
        .then(() => swiperContainer.classList.remove('hide-opacity'))
        .catch(() => moviePop(`No results for "${getRequest}"`))
    } else {
      localStorageItem('set', 'request', getRequest);
      requestUrl = `https://www.omdbapi.com/?s=${getRequest}&page=${localStorageItem('get', 'request-page')}&apikey=23356196`;
      getFullMovieCard();
    }
  });
}

export default moviesCreateCards;
