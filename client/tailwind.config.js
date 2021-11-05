module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        drawer: {
          "0%": {
            transform: "translateX(-25%)",
          },
          "100%": {
            transform: "none",
          },
        },
      },
      animation: {
        drawer: "drawer 0.3s ease-out forwards",
      },
    },
    flexGrow: {
      1: 1,
      2: 2,
      3: 3,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
