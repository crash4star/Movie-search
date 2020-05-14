import localStorageItem from "../options-functions/local-storage-get-set";
import sendRequest from "../options-functions/send-request";
import moviesCreateCards from "./movies-create-cards";
import sliderLoadNextPage from "../slider/slider-load-next-page";

function movieSearchFromInput() {
  const searchInput = document.querySelector('#input-search');

  if (searchInput.value === '') {
    alert('input empty');
  } else {
    console.log('load started');
    localStorage.removeItem('request-page');
    localStorageItem('set', 'request-page', 1);
    if (searchInput.value.search(/[А-яЁё]/) !== -1) {
      let requestUrl = '';
      const translateApi = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text=${searchInput.value}&lang=ru-en`;

      sendRequest('GET', translateApi)
        .then(data => {
          console.log('load complete');
          requestUrl = data.text.join('');
          localStorageItem('set', 'request', requestUrl);
          sendRequest('GET', `https://www.omdbapi.com/?s=${requestUrl}&page=${localStorageItem('get', 'request-page')}&apikey=23356196`)
            .then(res => {
              console.log('load complete');
              res.Search.forEach(item => {
                moviesCreateCards(item.Title);
              });
              sliderLoadNextPage();
            })
            .catch(err => console.log(`No results for "${searchInput.value.trim()}"`));
        })

    } else {

      localStorageItem('set', 'request', searchInput.value);
      sendRequest('GET', `https://www.omdbapi.com/?s=${searchInput.value.trim()}&page=${localStorageItem('get', 'request-page')}&apikey=23356196`)
        .then(res => {
          console.log('load complete');
          res.Search.forEach(item => {
            moviesCreateCards(item.Title);
          });
          sliderLoadNextPage();
        })
        .catch(err => {
          console.log(`No results for "${searchInput.value}"`);
        });
    }
  }
}

export default movieSearchFromInput;