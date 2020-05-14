function sliderFixStyle () {
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