/** @type {import('tailwindcss').Config} */
const {Nunito_Sans} = require("next/dist/compiled/@next/font/dist/google");
module.exports = {
  content: [
    // using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito:[Nunito_Sans]
      }
    },
  },
  plugins: [],
}

