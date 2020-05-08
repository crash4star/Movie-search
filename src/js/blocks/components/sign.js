const sign = {
  form: `<div class="user-global-wrapper" id="sign-form">
            <div class="user-name">
                <h2 class="user-name-headline" id="type-of-sign">Sing in</h2>
                <div class="user-name-input-wrapper">
                  <input class="user-name-input" type="text" id="username" placeholder="Enter your username">
                  <button class="user-name-btn" id="next-genres-btn"><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>`,
  userGenres: `<div class="user-genres">
                  <h2 class="user-genres-headline">Choose favourite genres</h2>
                  <small class="user-genres-minimum">Minimum 3</small>
                  <div class="user-genres-wrapper">
                    <button class="user-genres-btn user-genres-btn--comedy">Comedy</button>
                    <button class="user-genres-btn user-genres-btn--horror">Horror</button>
                    <button class="user-genres-btn user-genres-btn--action">Action</button>
                    <button class="user-genres-btn user-genres-btn--superhero">Crime</button>
                    <button class="user-genres-btn user-genres-btn--fantasy">Fantasy</button>
                    <button class="user-genres-btn user-genres-btn--sci-fi">Science Fiction</button>
                    <button class="user-genres-btn user-genres-btn--animation">Animation</button>
                    <button class="user-genres-btn user-genres-btn--romance">Romance</button>
                    <button class="user-genres-btn user-genres-btn--thriller">Thriller</button>
                    <button class="user-genres-btn user-genres-btn--drama">Drama</button>
                  </div>
                <button class="start-page-btn start-page-btn--disabled" id='start-page-btn'>Let's go</button>
              </div>`
};

export default sign;