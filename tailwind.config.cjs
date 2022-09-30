/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightGreen: "#014e56",
        lightCoral: "#f67e7e",
        raptureBlue: "#79c8c7",
        policeBlue: "#2c6269",
        jungleGreen: "#004047",
        stateGreen: "#012f34",
        darkGreen: "#002529",
      },
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
