/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        warning: "#B54708",
        faded: "#F6F6F6",
      },
      screens: {
        xs: "440px",
      },
      borderRadius: {
        curvy: "40px",
      },
    },
  },
  plugins: [],
};
