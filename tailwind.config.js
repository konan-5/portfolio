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
        'gray-light': '#f1f1f1',
        'grey': '#131723',
        'grey-light': '#222739'
      },
      boxShadow: {
        'input': '0 0 0 2px rgba(51, 156, 253, 0.2)'
      }
    },
  },
  plugins: [],
}

