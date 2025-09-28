/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#6881c3',
        primary50: '#f2f7fb',
        primary100: '#e7f1f8',
        primary200: '#d3e3f2',
        primary300: '#b7d1ea',
        primary400: '#91b1dc',
        primary500: '#819ed3',
        primary700: '#576dab',
        primary800: '#485a8b',
        primary900: '#404f6f',
        primary950: '#252c41',
        background: '#fafafa',
        border: '#E4E4E7',
        text: '#252C41',
        description: '#71717A',

      },
    },
  },
  plugins: [],
}

