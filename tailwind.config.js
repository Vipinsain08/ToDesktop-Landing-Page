/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      colors:{
        'primary':"#3238f2",
        'vipin':'#01ee91'
      },
      fontFamily:{
       'display':['Poppins','sans-serif'],
       'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

