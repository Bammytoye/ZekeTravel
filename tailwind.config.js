/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      'hero': "url('./src/assets/img/Zeke.png')"
    },
    colors: {
      'redText': '#DF6951',
      'purpleText': '#181E48',
      'yellowColor': '#F1A501',
      'textWhite': '#fff',
      'buttonColor': '#DF6951',
    },
    extend: {
      screens: {
        'xl':"1440px",
        'lg':"976px",
        'md':"768px",
        'sm':"480px",
      },
    },
  },
  plugins: [],
}