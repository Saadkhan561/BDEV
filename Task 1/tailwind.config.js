/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        airbnb: {
          500: '#FF5A5F',
        },
      },
      screens: {
        'sm': { 'max': '768px' },
        'sm-map': { 'max': '1200px' },
        'lg-down': { 'min': '1140px' },
        'footer-min': { 'min': '950px' },
        'footer-max': { 'max': '950px' },
        'question': {'max':'420px'}
      },
      fontFamily: {
        title: ['Montserrat Alternates'],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
