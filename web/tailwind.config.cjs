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
        700: "#BDBDBD",
        600: "#E0E0E0",
        500: "#F2F2F2",
        100: "#fff",
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
