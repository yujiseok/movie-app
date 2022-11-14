import { fetchMovieDetail } from "../lib/fetch";
import { detailLikeBtnHandler } from "../lib/likeBtnHandler";

const detail = async (id) => {
  window.scrollTo({ top: 0 });
  const section = document.querySelector("section");
  section.classList.add("relative");
  const res = await fetchMovieDetail(id);
  const localLikedMovies = JSON.parse(localStorage.getItem("movies"));
  let findId = null;

  localLikedMovies.find((localLikedMovie) => {
    if (localLikedMovie.imdbID === id) {
      findId = localLikedMovie.imdbID;
    }
  });

  const detailMarkup = `<div id="detail-wrap" class="max-w-1024 mx-auto pt-24 flex flex-col">
  <div class="flex gap-4">
    <div class="shadow-lg">
            <img
              class="poster rounded-md h-full"
              src="${res.Poster}"
              alt="${res.Title}"
            />
          </div>
          <div class="flex-1 flex flex-col gap-4">
            <div class="shadow-lg p-4 rounded-md flex justify-between dark:bg-gray-800 dark:border-gray-700">
             <div>
                <h2 class="text-xl font-semibold ">${res.Title}</h2>
                <p class="text-sm text-gray-500">
                  <span class="year">${res.Year}</span> • ${res.Genre.split(
    ", "
  ).join("/")} • ${res.Country.split(", ")[0]}
                </p>
             </div>
              <button>
              <i id="${res.imdbID}" class="like-btn fa-regular fa-heart ${
    findId === res.imdbID && "fa-solid"
  }"></i>
            </button>
            </div>
            <div class="shadow-lg p-4 rounded-md h-full dark:bg-gray-800 dark:border-gray-700">
              <h4 class="mb-4 text-lg font-semibold">Movie Details</h4>
              <p class="plot-wrap mb-4">${res.Plot}</p>
             <div class="text-sm text-gray-500 flex flex-col gap-2">
                <p>Director : ${res.Director}</p>
                <p>Actors : ${res.Actors}</p>
                <p class="type">Type : ${res.Type}</p>
                <p>Genre : ${res.Genre.split(", ").join(" ")}</p>
                <p>Runtime : ${res.Runtime}</p>
                <p>imdbRating : ${res.imdbRating}</p>
             </di>
            </div>
          </div>
  </div>
</div>`;

  section.innerHTML = detailMarkup;

  detailLikeBtnHandler();
};
export default detail;
