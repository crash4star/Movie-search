import localStorageItem from "../options-functions/local-storage-get-set";
import sendRequest from "../options-functions/send-request";
import shuffleArr from "../options-functions/shuffle-arr";
import moviesCreateCards from "./movies-create-cards";
import randomInteger from "../options-functions/random-integer";
import sliderConfig from "../slider/slider-config";

function moviesStartUserGenres() {
  localStorageItem('set', 'start-page', true);

  const currentUser = localStorageItem('get', 'current-user');
  const currentUserData = localStorageItem('get', currentUser);
  const getMoviesIdFromUserGenres = [];
  const getMoviesFromUserGenres = [];
  const renderMoviesFromUserGenres = [];

  if (currentUser) {
    sendRequest('GET', 'https://api.themoviedb.org/3/genre/movie/list?api_key=8ac6b9b6ae4c89c07b812cd8a80e533d&language=en-US')
      .then(data => {
        Object.keys(data.genres).forEach(dataGenre => {
          currentUserData.genres.forEach(userGenre => {
            if (data.genres[dataGenre].name === userGenre) {
              getMoviesIdFromUserGenres.push(data.genres[dataGenre].id);
            }
          });
        });

        getMoviesIdFromUserGenres.forEach(genre => {
          sendRequest('GET', `https://api.themoviedb.org/3/discover/movie?api_key=8ac6b9b6ae4c89c07b812cd8a80e533d&with_genres=${genre}&page=${randomInteger(1, 10)}`)
            .then(movies => {
              movies.results.forEach(item => {
                getMoviesFromUserGenres.push(item.title);
              });
              if (renderMoviesFromUserGenres.length < 20) {
                shuffleArr(getMoviesFromUserGenres).forEach(randomMovie => {
                  renderMoviesFromUserGenres.push({
                    Title: randomMovie
                  });
                });

                renderMoviesFromUserGenres.forEach(item => {
                  moviesCreateCards(item.Title);
                  sliderConfig(item.Title)
                });
                
              }
            });
        });
      })
      .catch(err => console.log(err));
  }
}

export default moviesStartUserGenres;