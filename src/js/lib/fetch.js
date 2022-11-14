import { likeBtnHandler } from "../lib/likeBtnHandler";
import { loaderHandler } from "../lib/ui";
import nothing from "../../img/image_not_found.png";

const fetchMovieDetail = async (id) => {
  loaderHandler(true);
  try {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
    );
    loaderHandler(false);

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const renderMovieLists = (movies) => {
  const searchResultWrap = document.getElementById("search-result-wrap");
  searchResultWrap.innerHTML = ``;

  movies.forEach((movie) => {
    const { imdbID, Poster, Title, Type, Year } = movie;

    searchResultWrap.innerHTML += `<li
      class="card bg-white rounded-md border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <a
        href="/"
        id="detail-link"
        data-id="${imdbID}"
        route="/detail/${imdbID}"
      >
        <img
          class="rounded-t-md w-full h-80 movie-poster"
          src="${Poster !== "N/A" ? Poster : nothing}"
          alt="${Title}"
        />
      </a>

      <div
        class="p-4"
        style="height: 150px; display: flex; justify-content: space-between; flex-direction: column;"
      >
        <h5
          class="title-wrap text-lg font-bold text-gray-900 dark:text-white"
          route="/detail/${imdbID}"
        >
          <a
            href="/"
            id="detail-link"
            data-id="${imdbID}"
            route="/detail/${imdbID}"
          >
            ${Title}</a
          >
        </h5>

        <div class="flex justify-between">
          <div>
            <div class="movie-type text-sm">${Type}</div>
            <div class="movie-year text-sm">${Year}</div>
          </div>
          <button>
            <i id="${imdbID}" class="like-btn fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </li> `;
    likeBtnHandler();
  });
};

const fetchMovies = async (title, type, year = "", page) => {
  const API = {
    KEY: process.env.API_KEY,
    S: `&s=${title}`,
    Y: `&y=${year}`,
    P: `&page=${page}`,
    T: `&type=${type}`,
  };

  loaderHandler(true);
  try {
    const res = await fetch(
      `https://omdbapi.com/?apikey=${API.KEY}${API.S}${API.T}${API.Y}${API.P}`
    );
    const json = await res.json();
    const { Search: movies, totalResults } = json;
    loaderHandler(false);
    renderMovieLists(movies);

    return movies;
  } catch (error) {
    console.log(error.message);
  }
};

const searchHandler = (e) => {
  e.preventDefault();
  const title = document.getElementById("search").value;
  const types = document.getElementById("types").value;
  const years = document.getElementById("years").value;

  title ? fetchMovies(title, types, years) : alert("검색어를 입력하세요");
};

export { fetchMovieDetail, renderMovieLists, fetchMovies, searchHandler };
