function renderDetailFilmModal() {
    return `
    <div id="js-detailsPage" class="details-container details-page hidden modal">
  <div class="details-wrapper">
    <img
      id="js-previewImg"
      class="details-img"
      src="#"
      alt="film-preview"
      width="100%"
      height="100%"
    />
    <div class="details-information">
      <button class="button-close">
        <svg class="details-close">
          <use href="../images/symbol-defs.svg#close"></use>
        </svg>
      </button>
      <h1 class="details-title">a fistful of lead</h1>
      <div class="details-inf">
        <ul class="details-inf-list">
          <li>Vote / Votes</li>
          <li>Popularity</li>
          <li>Original Title</li>
          <li>Genre</li>
        </ul>
        <ul class="details-inf-list details-inf-list-secondary">
          <li>
            <span id="js-detailsVote" class="text-orange">7.3 </span>
            <span id="js-detailsVotes">/ 1260</span>
          </li>
          <li id="details-popularity">100.2</li>
          <li id="details-originalTitle">a fistful of lead</li>
          <li id="details-genre">Western</li>
        </ul>
      </div>

      <div class="tabs-container">
        <ul class="tabs">
          <li class="active">
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">TRAILER</a>
          </li>
        </ul>
        <div class="tabs-content">
          <div
            id="js-detailsText"
            class="tabs-panel active"
            data-index="0"
          ></div>
          <div
            id="js-movieTrailer"
            class="movie-trailer tabs-panel"
            data-index="1"
          ></div>
          <div class="tabs-panel" data-index="2">
            <p></p>
          </div>
        </div>
      </div>

      <div class="details-button-list">
        <button class="details-button button-add-to-watch">
          add to Watched
        </button>
        <button class="details-button button-add-to-queue">add to queue</button>
      </div>
    </div>
  </div>
</div>
    `
}