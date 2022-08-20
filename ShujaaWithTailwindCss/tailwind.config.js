
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily:{
      'IBM': ['IBM Plex Sans','sans-serif']
    },
    extend: {
      colors:{
        'main-color':'#623CEA'
      }
    },
  },
  plugins: [],
}