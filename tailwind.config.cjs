/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        meetme: 'Ownglyph_meetme-Rg',
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        btnColor: '#F4EEE8',
        btnColorActive: '#E8DBCF',
        lightbeige: '#F7F3EF',
        beige: '#D8B18E',
      },
      keyframes: {
        intro: {
          from: {},
          to: {},
        },
      },
    },
  },
  plugins: [],
};
