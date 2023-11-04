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
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      borderRadius: {
        curvy: "40px",
      },
    },
  },
  plugins: [],
};
