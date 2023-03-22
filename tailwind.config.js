/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    aspectRatio: {
      "5/2": 5 / 2,
    },
    extend: {
      colors: {
        primary: "#ff4800",
      },
      fontFamily: {
        bebas: ["Bebas Neue"],
        rubic: ["Rubik"],
      },
    },
  },
  plugins: [],
};
