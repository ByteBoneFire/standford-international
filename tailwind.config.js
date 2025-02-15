/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF', // Example primary color
        'secondary': '#000000', // Example secondary color
        'accent': '#6574cd', // Example accent color
        'button': '#28a745', // Green button color
        'bgPrimary': '#DFDFDFCC',
        'bgSecondary': '#71A1CD40',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
