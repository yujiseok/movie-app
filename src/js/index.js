import "../css/tailwind.css";
import "../css/style.css";
import { router } from "./router";
import { saveMovies } from "./lib/likeBtnHandler";

const movies = JSON.parse(localStorage.getItem("movies")) || [];

saveMovies(movies);
router();
