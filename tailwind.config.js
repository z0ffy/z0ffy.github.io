/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
    fontFamily: {
      en: ['en'],
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
}
