import localStorageItem from "../options-functions/local-storage-get-set";
import sendRequest from "../options-functions/send-request";

function sliderLoadNextPage() {
  const sliderItems = document.querySelectorAll('.owl-item');
  const moviesWrapper = document.querySelector('.owl-stage');
  const sliderWrapper = document.querySelector('.owl-carousel');
  let nextPage = false;
  const sliderItem = document.querySelectorAll('.owl-item');

  document.addEventListener('mousedown', () => {
    setTimeout(() => {
      sliderItem.forEach((item, i, a) => {
        if (a[a.length - 3].classList.contains('active')) {
          alert('load next')
        }
      });
    }, 500);
  });

  // document.addEventListener('mousedown', () => {
  //   sliderItems.forEach((item, i, a) => {
  //     if (a[a.length - 3].classList.contains('active')) {
  //       nextPage = true;
  //     }
  //   });
  //   if (nextPage) {
  //     localStorageItem('set', 'request-page', (localStorageItem('get', 'request-page') + 1));
  //     console.log(localStorageItem('get', 'request-page'));
  //     sendRequest('GET', `https://www.omdbapi.com/?s=${localStorageItem('get', 'request')}&page=${localStorageItem('get', 'request-page')}&apikey=c8ff1116`)
  //           .then(res => {
  //             console.log(res.Search);
  //             sliderWrapper.innerHTML = sliderRenderCards(res.Search);
  //             sliderFixStyle();
  //             mineOwlCarousel();
  //             nextPage = false;
  //           })
  //           .catch(err => console.log(err));
  //   }
  // });


}

export default sliderLoadNextPage;

// sendRequest('GET', `https://www.omdbapi.com/?s=${requestUrl}&page=${localStorageItem('get', 'request-page')}&apikey=c8ff1116`)
//             .then(res => {
//               sliderWrapper.innerHTML = renderSliderCards(res.Search);
//               setTimeout(() => {
//                 sliderLoadNextPage();
//               }, 500);
//             })
//             .catch(err => noResultsForRequest());