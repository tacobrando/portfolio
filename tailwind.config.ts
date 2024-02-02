/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionDelay: {
        '3000': '3000ms'
      }
    },
  },
  plugins: [],
}

