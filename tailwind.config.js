/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        mainBlue: '#271AC1',
        mainBlueLight: '#2f1fff',
        darkGrayishBlue: '#1d2aaa'
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
