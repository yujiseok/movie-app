import { navigate } from "../router";

const movieDetailRoute = () => {
  const pageChange = document.getElementById("search-result-wrap");

  pageChange.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.parentNode.matches("[route]")) {
      const pagePath = e.target.parentNode.getAttribute("route");
      navigate(pagePath);
    }
  });
};

export { movieDetailRoute };
