/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "620px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        poppins: ["Work Sans", "sans - serif"],
      },
    },
  },
  plugins: [],
};
