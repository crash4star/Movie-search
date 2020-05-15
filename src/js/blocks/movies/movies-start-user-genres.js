import localStorageItem from "../options-functions/local-storage-get-set";
import sendRequest from "../options-functions/send-request";
import moviePop from "./movie-pop";
import randomInteger from "../options-functions/random-integer";
import sliderConfig from "../slider/slider-config";
import shuffleArr from "../options-functions/shuffle-arr";

function moviesStartUserGenres() {
  const currentUser = localStorageItem('get', 'current-user');
  const currentUserData = localStorageItem('get', currentUser);
  const loader = document.querySelector('.cs-loader');
  const result = [];

  const swiperContainer = document.querySelector('.swiper-container');
  swiperContainer.classList.remove('d-none');

  sendRequest('GET', 'https://api.themoviedb.org/3/genre/movie/list?api_key=8ac6b9b6ae4c89c07b812cd8a80e533d&language=en-US')
    .then(data => {
      swiperContainer.classList.add('hide-opacity');
      loader.classList.remove('d-none')
      Object.keys(data.genres).forEach(dataGenre => {
        currentUserData.genres.forEach(userGenre => {
          if (data.genres[dataGenre].name === userGenre) {
            sendRequest('GET', `https://api.themoviedb.org/3/discover/movie?api_key=8ac6b9b6ae4c89c07b812cd8a80e533d&with_genres=${data.genres[dataGenre].id}&page=${randomInteger(1, 10)}`)
              .then(movies => {
                movies.results.forEach(item => {
                  result.push(item.title);
                }); 
                shuffleArr(result);
                result.splice(26);
              })
              .then(() => localStorageItem('set', 'start-slider', result));
          }
        });
      });
    })
    .then(() => {
      setTimeout(() => {
        swiperContainer.classList.remove('hide-opacity')
        loader.classList.add('d-none')
      }, 1000)
    })
    .catch(err => moviePop(err));
  
    
  setTimeout(() => {
    localStorageItem('get', 'start-slider').forEach(item => {
      sendRequest('GET', `https://www.omdbapi.com/?t=$${item}&post=full&&apikey=23356196`)
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
        })
        .then(() => {
          moviePop(`Special selection for ${localStorageItem('get', 'current-user')}`)
        })
    });
  }, 500);

}

export default moviesStartUserGenres;
