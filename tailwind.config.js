/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'rale': ['Raleway', 'sans-serif'],
        'popp': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#3498db',
        'secondary': '#f7fbfe',
        'gray': '#384046',
        'gray-light': '#4f5a62',
        'grey': '#131723',
        'grey-light': '#f1f1f1'
      }
    },
  },
  plugins: [],
}

