import localStorageItem from "../options-functions/local-storage-get-set";
import sendRequest from "../options-functions/send-request";
import mineOwlCarousel from "../slider/slider-owl-mine";
import sliderFixStyle from "./movies-card-fix-style";

function moviesCreateCards(arr) {
  const moviesWrapper = document.querySelector('.movies-wrapper');
  const moviesData = [];
  const result = [];

  arr.forEach(item => {
    const fullMovieDescription = `https://www.omdbapi.com/?t=$${item.Title}&post=full&&apikey=c8ff1116`;
    sendRequest('GET', fullMovieDescription)
      .then(data => {
        const movieInfo = {
          poster: data.Poster,
          name: data.Title,
          rating: data.imdbRating,
          description: data.Plot,
          director: data.Director,
          genre: data.Genre,
          rated: data.Rated,
          year: data.Year,
          time: data.Runtime,
          id: data.imdbID,
          starring: data.Actors
        };

        moviesData.push(movieInfo);

        moviesData.forEach((item, i, a) => {
          if (item.name === undefined) {
            a.splice(i, 1);
          } else if (item.poster === 'N/A') {
            a[i].poster = 'https://raw.githubusercontent.com/crash4star-tester/mine_images/master/not-found.png';
          }  
        });

        moviesData.forEach(movie => {
          result.push(`
                  <div class="movies-wrapper-item">
                      <p class="movies-wrapper-rating">${movie.rating}</p>
                      <div class="movies-wrapper-poster">
                          <button class="movies-wrapper-add-list-btn added-in-list"><i class="fas fa-heart"></i></button>
                          <div class="movies-wrapper-poster-src" style="background-image: url('${movie.poster}')"></div>
                          <div class="movies-wrapper-rated-time">
                              <p class="movies-wrapper-time">${movie.time}</p>
                          </div>
                          <div class="movies-wrapper-genre">
                            <p>${movie.genre}</p>
                          </div>
                      </div>
                      <div class="movies-wrapper-info">
                          <p class="movies-wrapper-year">${movie.year}</p>
                          <a href="https://www.imdb.com/title/${movie.id}" class="movies-wrapper-title">${movie.name}</a>
                          <p class="movies-wrapper-desc">${movie.description}</p>
                          <p class="movies-wrapper-director">${movie.director}</p>
                          <div class="movies-wrapper-starring">
                            <p>${movie.starring}</p>
                          </div>
                      </div>
                  </div>
              `);
        });

        const uniqueMovies = new Set();
        result.forEach(unique => {
          uniqueMovies.add(unique);
        });

        const render = [];
        uniqueMovies.forEach(movie => {
          render.push(movie);
        });

        localStorageItem('set', 'current')
        moviesWrapper.innerHTML = '<div class="owl-carousel owl-theme"></div>';
        const sliderWrapper = document.querySelector('.owl-carousel');
        
        sliderWrapper.innerHTML = render.join('');
        mineOwlCarousel();
        sliderFixStyle();
      })
      .catch(err => console.log(err));
  });
}

export default moviesCreateCards;