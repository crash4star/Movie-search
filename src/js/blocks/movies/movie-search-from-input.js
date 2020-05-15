import localStorageItem from "../options-functions/local-storage-get-set";
import moviesCreateCards from "./movies-create-cards";
import moviePop from "./movie-pop";

function movieSearchFromInput() {
  const searchInput = document.querySelector('#input-search');
  const valueArr = [];
  valueArr.push(searchInput.value);

  if (searchInput.value === '') {
    moviePop('Search field is empty');
  } else {
    localStorage.removeItem('request-page');
    localStorageItem('set', 'request-page', 1);
    moviesCreateCards(valueArr);
  }
}

export default movieSearchFromInput;