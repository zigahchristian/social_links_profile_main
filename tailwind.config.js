
/** @type {import('tailwindcss').Config} */

export const content = ["./**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      primary: "#141414",
      secondary: {
        DEFAULT: "#1f1f1f",
        100: "#333333",
        200: "#FF8E01",
      },
      green: "#c1f82a",
      black: {
        DEFAULT: "#000",
        100: "#1E1E2D",
        200: "#232533",
      },
      gray: {
        100: "#111111",
        200: "#6B6B6B"
      },
    },
    fontFamily: {
      interregular: ["InterRegular", "sans-serif"],
      interbold: ["InterBold", "sans-serif"],
      intersemibold: ["InterSemiBold", "sans-serif"],
     
    },
  },
};
export const plugins = [{
  tailwindcss: {},
  autoprefixer: {}
}];






