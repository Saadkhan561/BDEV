/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        1000: '1000'
      },
      screens: {
        'med-display': {max: '1200px'},
        'mob-display': {max: '729px'}
      }
    },
  },
  plugins: [],
}

