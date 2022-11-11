import like from "../components/Like";
import { movieLikeDetailRoute } from "./handleClickRoute";
import { saveMovies } from "./likeBtnHandler";
const cancelLikeBtnHandler = () => {
  const cancelBtns = document.querySelectorAll(".like-btn");

  let movies = [];
  const storedMovies = localStorage.getItem("movies");

  if (storedMovies !== null) {
    const parse = JSON.parse(storedMovies);

    movies = parse;
  }

  cancelBtns.forEach((cancelBtn) => {
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      movies = movies.filter((movie) => movie.imdbID !== e.target.id);
      saveMovies(movies);
      like();
      cancelLikeBtnHandler();
      movieLikeDetailRoute();
    });
  });
};

export { cancelLikeBtnHandler };
