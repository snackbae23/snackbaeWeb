/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ['ui-sans-serif', 'system-ui', 'sans-serif', '\"Open Sans\"', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },

  },
  plugins: [],
};
