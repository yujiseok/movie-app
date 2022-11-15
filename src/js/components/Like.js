import { likeBtnHandler } from "../lib/likeBtnHandler";
import nothing from "../../img/image_not_found.png";

const like = () => {
  const localLikedMovies = localStorage.getItem("movies");
  const parse = JSON.parse(localLikedMovies);
  document.querySelector("main").innerHTML = ` <section>
    <div class="max-w-1280 mx-auto px-8 sm:px-4">
      <h2 class="my-8 text-xl font-semibold">좋아요한 영화 목록</h2>
      <ul
        class="likes-wrap grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      ></ul>
      <div
      id="loader"
      role="status"
      class="place-items-center hidden grid p-4 mx-auto"
    >
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
    </div>
  </section>`;

  if (parse.length === 0) {
    document.querySelector(".likes-wrap").innerHTML = `<div>
      좋아요한 영화가 없습니다.
    </div>`;
  } else {
    parse.forEach((p) => {
      document.querySelector(".likes-wrap").innerHTML += `
        <li
          class="bg-white rounded-md border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a
            href="/"
            id="detail-link"
            data-id="${p.imdbID}"
            route="/detail/${p.imdbID}"
          >
            <img
              class="rounded-t-md w-full h-80 movie-poster"
              src="${p.Poster !== "N/A" ? p.Poster : nothing}"
              alt="${p.Title}"
            />
          </a>
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
  }
};
export default like;
