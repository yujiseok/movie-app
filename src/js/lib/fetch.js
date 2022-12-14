import { likeBtnHandler } from "../lib/likeBtnHandler";
import { getPage, loaderHandler } from "../lib/ui";
import notFound from "../../img/image_not_found.png";

const fetchMovieDetail = async (id) => {
  loaderHandler(true);
  try {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
    );

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
  loaderHandler(false);
};

const renderMovieLists = (movies, totalResults) => {
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
          src="${Poster !== "N/A" ? Poster : notFound}"
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

  const total = Math.ceil(Number(totalResults) / 10);
  getPage(total);
};

const fetchMovies = async (title, type, year = "", page) => {
  const API = {
    KEY: "7035c60c",
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
    renderMovieLists(movies, totalResults);
    loaderHandler(false);

    return movies;
  } catch (error) {
    console.log(error.message);
  }
};

const searchHandler = (e) => {
  e.preventDefault();
  const title = document.getElementById("search").value;
  const type = document.getElementById("types").value;
  const year = document.getElementById("years").value;
  const page = document.getElementById("pages").value;

  title ? fetchMovies(title, type, year, page) : alert("???????????? ???????????????");
};

export { fetchMovieDetail, renderMovieLists, fetchMovies, searchHandler };
