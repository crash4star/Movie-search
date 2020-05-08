const content = {
  block: `
        <div class="holder-header">
            <div class="holder-header-wrapper">
                <div class="search-bar">
                    <input type="text" placeholder="Search something..." class="search-input" id="input-search" autofocus>
                    <button class="search-input-btn search-input-btn-start"><i class="fas fa-search"></i></button>
                    <label class="search-input-btn search-input-btn-reset" for="input-search"><i class="fas fa-times"></i></label>
                </div>
                <div class="user-bar">
                    <button class="user-bar-dropdown-btn"></button>
                    <div class="user-bar-dropdown-menu d-none">
                        <a href="#" class="user-bar-dropdown-item user-bar-dropdown-item--user">crash4star</a>
                        <a href="#" class="user-bar-dropdown-item user-bar-dropdown-item--list">My list<i class="fas fa-heart"></i></a>
                        <a href="#" class="user-bar-dropdown-item user-bar-dropdown-item--out">Sign out<i class="fas fa-sign-out-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="movies-wrapper"></div>`
};

export default content;