/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'outer-end': '#484545',
        'outer-start':'#272525',
        'inner-end': '#353132',
        'inner-start': '#2B2627',
        'dark-red': '#EA3C47',
        'light-red': '#C3797D',
        'dark-blue': '#3960EF',
        'light-blue': '#7690ED',
      },
    }
    ,
  },
  plugins: [],
}