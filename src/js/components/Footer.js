const Footer = () => {
  const footer = document.createElement("footer");
  // footer.classList.add("w-full", "absolute", "bottom-0", "border-t");
  document.querySelector("#root").appendChild(footer);
  const year = new Date().getFullYear();

  const footerMarkup = `<div class="max-w-1280 mx-auto text-center ">
    <div class="p-4">
      <div class="flex justify-center items-center">
        <a href="https://github.com/yujiseok" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
        유지석
      </div>
      <span>${year}</span>
    </div>
  </div>`;

  footer.innerHTML = footerMarkup;
};
export default Footer;
