/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        walmart: {
          500: '#007dc6',
        },
        walmartHover: {
          500: '#004c91',
        },
        search: {
          500: '#FCB61A',
        },
      },
      screens: {
        'navbar-closed': { max: '1100px' },
        'navbar-open': { min: '1100px' },
        'subitems': { max: '1720px' },
        'subitem-icon': { min: '1720px' },
        'subitem-2-open': { min: '700px' },
        'subitem-2-closed': { max: '700px' },
        'subitem-2-no': { max: '430px' },
        'card-div-closed': { max: '1200px' },
        'card-div-open': { min: '1200px' },
        'ad-tags': { max: '1000px' },
        'footer': { max: '1300px'}
      },
      width: {
        800: '800px',
        300: '275px',
      },
      fontFamily: {
        open: ['Open Sans'],
      },
    },
  },
  plugins: [],
};
