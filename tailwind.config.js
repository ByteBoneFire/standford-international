/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF', //  primary color
        'secondary': '#000000', //  secondary color
        'button': '#28a745', // Green button color
        'brand': '#0D457390', // blue color with 80% opacity
        'bgPrimary': '#DAA38C40', // pinks color with 40% opacity
        'bgSecondary': '#71A1CD20', // blue color with 20% opacity
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
