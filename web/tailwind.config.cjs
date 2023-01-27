/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#A563F0",
      lightGreen: "#65FADD",
      blue: "#2F71FD",
      carbon: {
        900: "#333",
        800: "#828282",
        500: "#BDBDBD",
        300: "#E0E0E0",
        200: "#F2F2F2",
        100: "#fff",
      },
      gray: {
        footer: "rgba(51, 51, 51, 1)",
        text: "#ACB1BA",
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
      secondary: ["Proxima Nova", "sans-serif"],
    },
  },

  extend: {},
  plugins: [],
};
