import localStorageItem from "../options-functions/local-storage-get-set";
import sendRequest from "../options-functions/send-request";
import moviesCreateCards from "../movies/movies-create-cards";

function sliderLoadNextPage(swiper) {
  let page = 1;

  if (localStorageItem('get', 'next-page')) {
    swiper.on('reachEnd', () => {
      page += 1;
      console.log(page);

      console.log('end');
      localStorageItem('set', 'request-page', page);
      sendRequest('GET', `https://www.omdbapi.com/?s=${localStorageItem('get', 'request')}&page=${localStorageItem('get', 'request-page')}&apikey=23356196`)
        .then(res => {
          console.log('load complete');
          console.log(res);
          res.Search.forEach(item => {
            moviesCreateCards(item.Title);
          });
          // sliderLoadNextPage();
        })
    })
  };
  // document.addEventListener('mousedown', () => {
  //   if (localStorageItem('get', 'request') && localStorageItem('get', 'next-page')) {
  //     localStorage.removeItem('next-page')
  //     localStorageItem('set', 'request-page', localStorageItem('get', 'request-page') + 1);
  //     sendRequest('GET', `https://www.omdbapi.com/?s=${localStorageItem('get', 'request')}&page=${localStorageItem('get', 'request-page')}&apikey=c8ff1116`)
  //       .then(res => {
  //         console.log('load complete');
  //         console.log(res);

  //         res.Search.forEach(item => {
  //           moviesCreateCards(item.Title);
  //         });
  //         // sliderLoadNextPage();
  //       })
  //       .catch(err => {
  //         console.log(`No results for "${localStorageItem('get', 'request')}"`);
  //       });
  //   }
  // });
}

export default sliderLoadNextPage;