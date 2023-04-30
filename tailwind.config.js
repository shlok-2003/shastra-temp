import { colors } from '@mui/material';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': '300px',
    //   'md': '1024px',
    //   'lg': '1280px',
    // },
    
    extend: {
      fontFamily: {
        'Ubuntu': ['Ubuntu']
      },
      colors: {
        'footer': "#EBEBEB",
        'home': "#EFEFED"
      }
    },
  },
  plugins: [],
}

