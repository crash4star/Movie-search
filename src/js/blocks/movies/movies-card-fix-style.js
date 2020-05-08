function sliderFixStyle() {
  const stylesForGenre = document.querySelectorAll('.movies-wrapper-genre p');
  stylesForGenre.forEach((item, i, a) => {
    const genres = item.textContent;
    const resultGenresStyles = [];

    genres.split(' ').forEach(genre => {
      if (genre[genre.length - 1] === ',') {
        resultGenresStyles.push(`<p class="movies-wrapper-genre-item">${genre.substring(0, genre.length - 1)}</p>`);
      } else {
        resultGenresStyles.push(`<p class="movies-wrapper-genre-item">${genre}</p>`);
      }
    });
    a[i].parentNode.innerHTML = resultGenresStyles.join(' ');
  });

  const stylesForStarring = document.querySelectorAll('.movies-wrapper-starring p');
  stylesForStarring.forEach((item, i, a) => {
    const actor = item.textContent;
    const resultActorStyles = [];

    if (item.textContent === 'N/A') {
      item.classList.add('hide');
    }

    actor.split(',').forEach(star => {
      if (star[star.length - 1] === ',') {
        resultActorStyles.push(`<p class="movies-wrapper-star">${star.substring(0, star.length - 1).trim()}</p>`);
      } else {
        resultActorStyles.push(`<p class="movies-wrapper-star">${star.trim()}</p>`);
      }
    });
    a[i].parentNode.innerHTML = resultActorStyles.join(' ');
  });

  const hasEmptyDirector = document.querySelectorAll('.movies-wrapper-director');
  hasEmptyDirector.forEach(item => {
    if (item.textContent === 'N/A') {
      item.classList.add('hide');
    }
  });

  const stylesForRating = document.querySelectorAll('.movies-wrapper-rating');
  stylesForRating.forEach(item => {
    const ratingNumber = item.textContent;

    if (+ratingNumber === 'N/A') {
      item.classList.add('hide');
    }

    if (+ratingNumber < 4) {
      item.classList.add('movies-wrapper-rating--low');
    } else if (+ratingNumber > 4 && +ratingNumber < 7) {
      item.classList.add('movies-wrapper-rating--middle');
    }

  });

  const hasEmptyDescription = document.querySelectorAll('.movies-wrapper-desc');
  hasEmptyDescription.forEach(item => {
    if (item.textContent === 'N/A') {
      item.classList.add('hide');
    }
  });

  const hasEmptyTime= document.querySelectorAll('.movies-wrapper-time');
  hasEmptyTime.forEach(item => {
    if (item.textContent === 'N/A') {
      item.classList.add('hide');
    }
  });

  const hasEmptyRated= document.querySelectorAll('.movies-wrapper-rating');
  hasEmptyRated.forEach(item => {
    if (item.textContent === 'N/A') {
      item.classList.add('hide');
    }
  });

  const hasEmptyYear= document.querySelectorAll('.movies-wrapper-year');
  hasEmptyYear.forEach(item => {
    if (item.textContent === 'N/A') {
      item.classList.add('hide');
    }
  });
}

export default sliderFixStyle;