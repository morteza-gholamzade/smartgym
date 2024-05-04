/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'secondary-color': '#232441',
        'light-color': '#F0F3FF',
        'light-color-2': '#52559F',
        'light-color-3': '#DDE4FE',
        'primary-color': '#E7FE58',
        'light-3': '#6A7CBC',
        
      },

      height:{
        '278': '1112px',
        '18': '74px',
        '66': '264px',

      },
      width:{
        '26': '98px',
        '66': '264px',

      },
      borderRadius:{
        '4xl':'36px'
      },
      boxShadow: {
        '3xl': '0 -1px 20px  rgba(0, 0, 0, 0.2)',
        '4xl': '0px 4px 20px 0px rgba(0, 0, 0, 0.11)',
        '5xl': '0px 3px 20px 0px rgba(11, 77, 82, 0.18)'


      }
    },
  },
  plugins: [],
}

