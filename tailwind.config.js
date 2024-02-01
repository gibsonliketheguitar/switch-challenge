/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-linear': '#2B2627',
        'light-dark-linear': '#353132',
      },
    }
    ,
  },
  plugins: [],
}