/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#111111",
      white: "#ffffff",
      V2G: "#24E720",
      equi: "#2B2B2B",
      // ...
    },
    fontFamily: {
      Rubik: ["'Aboreto'", "cursive"],
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [],
};
