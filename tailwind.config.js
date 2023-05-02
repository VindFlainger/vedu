/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/UI/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#49BBBD",
        "main-light": "#74cdce",
        action: "#D8587E",
        "grey": "#696984"
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}