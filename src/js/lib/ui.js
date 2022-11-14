import { placeholderArr } from "../../data/store";

const loaderHandler = (state) => {
  const loaderEl = document.getElementById("loader");
  state
    ? loaderEl.classList.remove("hidden")
    : loaderEl.classList.add("hidden");
};

// const typeWriter = (text) => {
//   // const text = text;
//   const speed = 100;
//   let index = 0;

//   function typewriter() {
//     document.getElementById("typewriter").textContent = text.slice(0, index);
//     index++;

//     if (index > text.length) {
//       index = 1;
//     }
//   }

//   setInterval(typewriter, speed);
// };

const randomPlaceHolder = () => {
  const randomArr = placeholderArr.sort(() => Math.random() - 0.5);

  const searchEl = document.getElementById("search");

  randomArr.forEach((item) => {
    searchEl.placeholder = `오늘 밤에는 ${item} 한 편 어떠신가요? 🎬`;
  });
};

const getYear = () => {
  const yearsEl = document.getElementById("years");
  const years = [];
  const thisYear = new Date().getFullYear();
  for (let i = thisYear; i >= 1990; i -= 1) {
    years.push(i);
  }

  years.forEach(
    (year) => (yearsEl.innerHTML += `<option value="${year}">${year}</option>`)
  );
};

const getPage = () => {
  const pagesEl = document.getElementById("pages");
  const pages = [];
  for (let i = 1; i <= 5; i += 1) {
    pages.push(i);
  }

  pages.forEach(
    (page) => (pagesEl.innerHTML += `<option value="${page}">${page}</option>`)
  );
};

const getCopyYear = () => {
  const getFullYear = new Date().getFullYear();
  copyYearEl = document.querySelector(".copy-year");
  copyYearEl.textContent = getFullYear;
};

const darkModeHandler = () => {
  let darkMode = localStorage.getItem("darkMode");
  const darkModeBtn = document.querySelector(".dark-mode-btn");

  const enableDarkMode = () => {
    document.body.classList.add("dark");
    darkModeBtn.setAttribute("checked", true);

    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark");

    localStorage.setItem("darkMode", "disabled");
  };

  darkMode === "enabled" && enableDarkMode();

  darkModeBtn.addEventListener("change", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
};

export {
  loaderHandler,
  // typeWriter,
  randomPlaceHolder,
  getYear,
  getPage,
  getCopyYear,
  darkModeHandler,
};
