import movieSearchFromInput from "../movies/movie-search-from-input";
import moviesStartUserGenres from "../movies/movies-start-user-genres";
import sliderLoadNextPage from "../slider/slider-load-next-page";

function startApp() {
  moviesStartUserGenres();
  
  const searchBtn = document.querySelector('.search-input-btn');
  const searchInput = document.querySelector('#input-search');
  const searchResetBtn = document.querySelector('.search-input-btn-reset');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      movieSearchFromInput();
      setTimeout(() => {
        sliderLoadNextPage();
      }, 500);
    });
  }

  if (searchResetBtn) {
    searchResetBtn.addEventListener('click', () => {
      searchInput.value = '';
    });
  }

  document.addEventListener('keydown', (e) => {
    if (document.activeElement === searchInput && e.code === 'Enter') {
      movieSearchFromInput();
      setTimeout(() => {
        sliderLoadNextPage();
      }, 500);
    }
  });
}

export default startApp;