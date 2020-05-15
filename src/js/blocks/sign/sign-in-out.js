import localStorageItem from "../options-functions/local-storage-get-set";
import sign from "../components/sign";
import content from "../components/content";
import signUserGenres from "./sign-user-genres";
import startApp from "../app/start-app";
import moviePop from "../movies/movie-pop";


function singInOut() {
  const globalWrapper = document.querySelector('#content-wrapper');
  const signBtn = document.querySelector('#sign-in');

  signBtn.addEventListener('click', () => {

    globalWrapper.innerHTML = sign.form;
    const nextGenresBtn = document.querySelector('#next-genres-btn');
    const usernameInput = document.querySelector('#username');

    nextGenresBtn.addEventListener('click', () => {
      if (usernameInput.value === '') {
        moviePop('Please, enter you username')
      } else if (localStorageItem('get', usernameInput.value)) {
        globalWrapper.innerHTML = content.block;
        startApp();
      } else {
        localStorageItem('set', 'create-user', usernameInput.value);
        signUserGenres();
      }
    });
  });
}

export default singInOut;