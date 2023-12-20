/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animationDelay: {
        275: '275ms',
        5000: '5s',
      },
      animationDuration: {
        2000: '2s',
        long: '10s',
        'very-long': '20s',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
