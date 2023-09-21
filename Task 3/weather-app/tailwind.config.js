/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'search-bar': {max: '1393px'},
        'mob-display': {max: '729px'},
        'weather': {max: '1060px'}
      },
      height: {
        95: '95%'
      }
      // backgroundImage: {
      //   'clouds': "url('./images/clouds.gif')"
      // }
    },
  },
  plugins: [],
}

