/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#061D3C",
        secondry: "#F9B80C",
        litegray: "#969595",
      }
    },
  },
  plugins: [],
}