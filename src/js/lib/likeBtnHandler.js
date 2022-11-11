export const saveMovies = (movies) => {
  localStorage.setItem("movies", JSON.stringify(movies));
};

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

  for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener("click", () => {
      if (btnArr[i].classList.contains("fa-solid")) {
        btnArr[i].classList.remove("fa-solid");
        movies = movies.filter((movie) => movie.imdbID !== btnArr[i].id);
        saveMovies(movies);
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
        saveMovies(movies);
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

export const detailLikeBtnHandler = () => {
  const poster = document.querySelector(".poster");
  const year = document.querySelector(".year");
  const type = document.querySelector(".type");
  const likeBtn = document.querySelector(".like-btn");

  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("fa-solid")) {
      likeBtn.classList.remove("fa-solid");
      movies = movies.filter((movie) => movie.imdbID !== likeBtn.id);
      saveMovies(movies);
    } else {
      likeBtn.classList.add("fa-solid");

      const likeMovie = {
        imdbID: likeBtn.id,
        Title: poster.getAttribute("alt"),
        Poster: poster.getAttribute("src"),
        Type: type.textContent,
        Year: year.textContent,
        Time: Date.now(),
      };

      movies.push(likeMovie);
      saveMovies(movies);
    }
  });
};
