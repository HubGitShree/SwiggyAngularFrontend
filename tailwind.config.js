/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,ts}"  
  ],
  theme: {
    extend: {
      colors: {
        swiggyorange : '#FF6C27' ,
      }
    },
  },
  plugins: [],
}

