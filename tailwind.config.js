/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ['Ubuntu', 'sans-serif'],
       },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
