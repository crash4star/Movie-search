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

  const hasEmptyStar= document.querySelectorAll('.movies-wrapper-star');
  hasEmptyStar.forEach(item => {
    if (item.textContent === 'N/A') {
      item.parentNode.classList.add('hide');
    }
  });

  const hasEmptyPoster= document.querySelectorAll('.movies-wrapper-poster-src');
  hasEmptyPoster.forEach(item => {
    if (item.style.backgroundImage === 'url("N/A")') {
      item.style.backgroundImage = 'url("https://raw.githubusercontent.com/crash4star-tester/mine_images/master/not-found.png")'
    }
  });

  // const fixGenreStyles= document.querySelectorAll('.movies-wrapper-genre-item');
  // fixGenreStyles.forEach(item => {
  //   item.textContent.split(' ').forEach(text => {
  //     item.innerHTML += `<p>${text}</p>`;
  //   });
  //   // if (item.textContent[text.length - 1] === ',') {
  //   //   item.textContent.substring(0, item.textContent.length - 1)
  //   //   item.innerHTML += `<p>${text}</p>`
  //   // } else {
  //   //   item.innerHTML += `<p>${text}</p>`
  //   // }
  //  });
}

export default sliderFixStyle;