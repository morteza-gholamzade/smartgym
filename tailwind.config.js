/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'secondary-color': '#232441',
        'light-color': '#F0F3FF',
        'primary-color': '#E7FE58',
        'light-3': '#6A7CBC',
        
      },

      height:{
        '278': '1112px',

      },
      borderRadius:{
        '4xl':'36px'
      },
      boxShadow: {
        '3xl': '0 -1px 20px  rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

