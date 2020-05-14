import movieSearchFromInput from "../movies/movie-search-from-input";
import moviesStartUserGenres from "../movies/movies-start-user-genres";
import localStorageItem from "../options-functions/local-storage-get-set";

function startApp() {
  localStorage.removeItem('request');
  localStorage.removeItem('next-page');
  localStorageItem('set', 'request-page', 1);
  moviesStartUserGenres();

  const searchBtn = document.querySelector('.search-input-btn');
  const searchInput = document.querySelector('#input-search');
  const searchResetBtn = document.querySelector('.search-input-btn-reset');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      localStorage.removeItem('start-page');
      localStorageItem('set', 'next-page', true);
      setTimeout(() => {
        localStorage.removeItem('next-page');
      }, 300);
      movieSearchFromInput();
    });
  }

  if (searchResetBtn) {
    searchResetBtn.addEventListener('click', () => {
      searchInput.value = '';
    });
  }

  document.addEventListener('keydown', (e) => {
    if (document.activeElement === searchInput && e.code === 'Enter') {
      localStorage.removeItem('start-page');
      localStorageItem('set', 'next-page', true);

      setTimeout(() => {
        localStorage.removeItem('next-page');
      }, 300);
      movieSearchFromInput();
    }
  });
}

export default startApp;