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
        'shadow-red': '#D6455B',
        'dark-blue': '#3960EF',
        'light-blue': '#7690ED',
        'shadow-blue': '#4062DD'
      },
      boxShadow: {
         'custom-red': '0 0 20px 10px rgba(214, 69, 91, .3)',
         'custom-blue': '0 0 20px 10px rgba(64, 98, 221, .3)'
      }
    }

,
  },
  plugins: [],
}