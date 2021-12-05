const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      purple: colors.violet,
      green: colors.emerald,
      pink: colors.pink,
      yellow: colors.yellow,
    },
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
      serif: ['"Merriweather"', "serif"],
    },
    extend: {
      backgroundImage: {
        "split-purple-bottom":
          "linear-gradient(to bottom, transparent 60%, #cdbcff 10%);",
        "split-green-bottom":
          "linear-gradient(to bottom, transparent 60%, #A7F3D0 10%);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
