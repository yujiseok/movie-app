import detail from "./components/Detail";
// import Footer from "./components/Footer";
import header from "./components/Header";
import home from "./components/Home";
import like from "./components/Like";
import main from "./components/Main";
import profile from "./components/Profile";
import { cancelLikeBtnHandler } from "./lib/cancelLikeBtnHandler";
import { movieDetailRoute, movieLikeDetailRoute } from "./lib/handleClickRoute";

const navigate = (pagePath) => {
  history.pushState(null, null, location.origin + pagePath);
  router();
};

header();
main();
handleClickHome();
handleClickLike();
handleClickProfile();
// Footer();

const router = () => {
  const routes = [
    {
      path: "/",
      view: async () => {
        home();
        movieDetailRoute();
      },
    },
    {
      path: "detail",
      view: async () => {
        await detail(location.pathname.split("/")[2]);
      },
    },
    {
      path: "likes",
      view: async () => {
        like();
        cancelLikeBtnHandler();
        movieLikeDetailRoute();
      },
    },
    {
      path: "profile",
      view: async () => {
        profile();
      },
    },
  ];
  const matches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname.split("/")[1] === route.path,
    };
  });

  let match = matches.find((m) => m.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  match.route.view();
};

window.addEventListener("popstate", router);

function handleClickHome() {
  const home = document.querySelector(".home");

  home.addEventListener("click", (e) => {
    e.preventDefault();
    const pagePath = e.currentTarget.getAttribute("route");
    navigate(pagePath);
  });
}

function handleClickLike() {
  const like = document.querySelector(".like");

  like.addEventListener("click", (e) => {
    e.preventDefault();
    const pagePath = e.currentTarget.getAttribute("route");
    navigate(pagePath);
  });
}

function handleClickProfile() {
  const profile = document.querySelector(".profile");

  profile.addEventListener("click", (e) => {
    e.preventDefault();
    const pagePath = e.currentTarget.getAttribute("route");
    navigate(pagePath);
  });
}

export { router, navigate };
