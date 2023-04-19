/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '746px',
      lg: '974px',
      l: '1280px',
      xl: '1440px',
      xxl: '1920px'
    },
    extend: {
      colors: {
        "bg-Primary": "#1D1042",
        "bg-Secondary": "#45269C",
        "grayish-White": "#D5D5D5",
        "whitish-Gray": "#F2F4F5",
        "black": "#000000",
        "light-white": "rgba(255,255,255,0.17)"
      }
    },
  },
  plugins: [],
}