// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/Guest/**/*.{js,jsx,ts,tsx}", // Sesuaikan dengan path proyek Anda
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        'bentos-script': ['Bentos Script', 'cursive'],
      },
    },
  },
  plugins: [],
}