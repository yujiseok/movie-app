import { darkModeHandler } from "../lib/ui";
// <div><a href="#" class="profile" route="/profile">만든사람</a></div>
const header = () => {
  const headerMarkup = ` <header class="border-b shadow-md">
    <div class="max-w-1280 mx-auto ">
      <nav class="flex justify-between items-center h-14 ">
        <ul class="flex gap-4">
          <li><a href="/" class="home" route="/">Home</a></li>
         
          <li><a href="#" class="like" route="/likes">좋아요</a></li>
        </ul>

        <div class="flex gap-4">
          
          <div>
            <input type="checkbox" class="dark-mode-btn" id="dark-mode-btn" />
            <label for="dark-mode-btn" class="dark-mode-label">
              <i class="fa-solid fa-moon"></i>
              <i class="fa-solid fa-sun"></i>
              <div class="ball"></div>
            </label>
          </div>
        </div>
      </nav>
    </div>
  </header>`;

  document.querySelector("#root").innerHTML = headerMarkup;

  darkModeHandler();
};
export default header;
