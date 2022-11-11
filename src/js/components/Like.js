import { likeBtnHandler } from "../lib/likeBtnHandler";

const like = () => {
  const localLikedMovies = localStorage.getItem("movies");
  const parse = JSON.parse(localLikedMovies);

  document.querySelector("main").innerHTML = ` <section>
    <div class="max-w-1280 mx-auto py-24">
      <ul
        class="likes-wrap grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      ></ul>
    </div>
  </section>`;

  parse.forEach((p) => {
    document.querySelector(".likes-wrap").innerHTML += `
      <li
        class="bg-white rounded-md border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <img
          class="rounded-t-md w-full h-80 movie-poster"
          src="${p.Poster ? p.Poster : "../src/img/image_not_found.png"}"
          alt="${p.Title}"
        />

        <div
          class="p-4"
          style="height: 150px; display: flex; justify-content: space-between; flex-direction: column;"
        >
          <h5
            class="title-wrap text-lg font-bold text-gray-900 dark:text-white"
            route="/detail/${p.imdbID}"
          >
            <a
              href="/"
              id="detail-link"
              data-id="${p.imdbID}"
              route="/detail/${p.imdbID}"
            >
              ${p.Title}</a
            >
          </h5>

          <div class="flex justify-between">
            <div>
              <div class="movie-type text-sm">${p.Type}</div>
              <div class="movie-year text-sm">${p.Year}</div>
            </div>
            <button>
              <i id="${p.imdbID}" class="like-btn fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </li>
    `;

    likeBtnHandler();
  });
};
export default like;
