import logo from "../../img/profile.gif";

const profile = () => {
  const profileTemplate = `
  <section class="py-11">
    <div class="h-full max-w-1280 mx-auto grid place-items-center gap-4">
      <div class="w-64"><img src=${logo} class="rounded-full" /></div>
      <div>유지석</div>
      <div id="typewriter"></div>
      <a href="https://github.com/yujiseok" target="_blank">깃허브</a>
    </div>
  </section>`;

  document.querySelector("main").innerHTML = profileTemplate;
};
export default profile;
