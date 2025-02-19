/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc', // Vibrant blue for primary elements
        'secondary': '#f59e0b', // Soft Gold/Amber for highlights - UPDATED
        'accent': '#fc8181',   // Red accent for calls to action
        'button': '#28a745',    // Green button color (remains)
        'brand': '#0D4573',     // Stronger blue brand color
        'bgPrimary': '#f0f4f8', // Light gray background
        'bgSecondary': '#e2e8f0', // Slightly darker gray for sections
      },
      fontFamily: {
        'sans': ['"Nunito Sans"', 'sans-serif'], // Modern, readable font
        'serif': ['"Merriweather"', 'serif'],     // For headings or special text
      },
    },
  },
  plugins: [],
}
