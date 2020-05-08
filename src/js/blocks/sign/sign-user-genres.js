import localStorageItem from "../options-functions/local-storage-get-set";
import sign from "../components/sign";
import content from "../components/content";
import startApp from "../app/start-app";

function signUserGenres() {
  const globalWrapper = document.querySelector('#content-wrapper');
  globalWrapper.innerHTML = sign.userGenres;

  const userGenresBlock = document.querySelector('.user-genres');
  const userGenres = document.querySelector('.user-genres-wrapper');
  const userStartPageBtn = document.querySelector('#start-page-btn');
  const userGenresSet = new Set();

  userGenres.addEventListener('click', (e) => {
    const currentGenre = e.target;
    currentGenre.classList.toggle('user-genres-btn--active');

    if (currentGenre.classList.contains('user-genres-btn--active')) {
      userGenresSet.add(currentGenre.textContent);
    } else {
      userGenresSet.delete(currentGenre.textContent);
    }
  });

  userStartPageBtn.addEventListener('click', () => {
    const user = {
      name: localStorageItem('get', 'create-user'),
      genres: []
    };
    userGenresSet.forEach(item => {
      user.genres.push(item);
    });
    localStorageItem('set', user.name, user);
    localStorageItem('set', 'current-user', user.name);
    localStorage.removeItem('create-user');
    userGenresBlock.remove();
    globalWrapper.innerHTML = content.block;
    startApp();
  });
}

export default signUserGenres;