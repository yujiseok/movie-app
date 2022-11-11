module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        1280: "1280px",
      },
      maxWidth: {
        1280: "1280px",
        1100: "1100px",
        1024: "1024px",
      },
      fontFamily: {
        sans: ["Poppins", "Ariel", "Sans"],
      },
      minHeight: {
        40: "40px",
      },
      height: {
        88: "22rem",
      },
      colors: {
        dark: "#292c35",
      },
    },
  },
  plugins: [],
};
