export const likeBtnHandler = () => {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  const likesBtns = document.querySelectorAll(".like-btn");
  const moviePosters = document.querySelectorAll(".movie-poster");
  const movieTypes = document.querySelectorAll(".movie-type");
  const movieYears = document.querySelectorAll(".movie-year");
  const btnArr = [...likesBtns];
  const posterArr = [...moviePosters];
  const typeArr = [...movieTypes];
  const movieArr = [...movieYears];

  function saveMoives() {
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener("click", () => {
      if (btnArr[i].classList.contains("fa-solid")) {
        btnArr[i].classList.remove("fa-solid");
        movies = movies.filter((movie) => movie.imdbID !== btnArr[i].id);
        saveMoives();
      } else {
        btnArr[i].classList.add("fa-solid");

        const likeMovie = {
          imdbID: btnArr[i].id,
          Title: posterArr[i].getAttribute("alt"),
          Poster: posterArr[i].getAttribute("src"),
          Type: typeArr[i].textContent,
          Year: movieArr[i].textContent,
          Time: Date.now(),
        };

        movies.push(likeMovie);
        saveMoives();
      }
    });

    const localLikedMovies = localStorage.getItem("movies");
    const parse = JSON.parse(localLikedMovies);
    parse.forEach((p) => {
      btnArr.forEach((btn) => {
        if (p.imdbID === btn.id) {
          btn.classList.add("fa-solid");
        }
      });
    });
  }
};
