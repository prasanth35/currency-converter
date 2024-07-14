const { split } = require('postcss/lib/list');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary' : 'linear-gradient(to top,white 50%,paleturquoise 50%)',
      },
    },
  },
  plugins: [],
}