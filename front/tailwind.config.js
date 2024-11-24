/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Inter"', '"Roboto"', '"Playfair Display"', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'], // Для заголовков
        body: ['"Inter"', '"Roboto"', 'sans-serif'], // Для основного текста
      },
      

      colors:{
        books:{
          green: {
            light: '#1ED760', // Светло-зеленый (для акцентов)
            DEFAULT: '#1DB954', // Основной зеленый
            dark: '#1AA34A', // Темно-зеленый (для кнопок при наведении)
          },
          black: {
            light: '#232323', // Менее глубокий черный (альтернативный фон)
            DEFAULT: '#191414', // Основной черный
            dark: '#0F0F0F', // Глубокий черный (для модальных окон)
          },
          gray: {
            lightest: '#F5F5F5', // Почти белый (фон для выделений)
            light: '#B3B3B3', // Светло-серый (для текста и иконок)
            DEFAULT: '#282828', // Темно-серый (основной фон)
            dark: '#121212', // Очень темный серый (глубокий фон)
          },
          white: '#FFFFFF', // Чистый белый
          blue: {
            light: '#509BF5', // Светло-синий (дополнительный акцент)
            DEFAULT: '#4688F1', // Основной синий (для ссылок или кнопок)
            dark: '#3570CC', // Темно-синий
          },
          purple: {
            light: '#A29BFE', // Светло-фиолетовый
            DEFAULT: '#8E44AD', // Основной фиолетовый (акцент для яркости)
            dark: '#6C3483', // Темно-фиолетовый
          },
      },
    },
  },
},
  plugins: [
    require('tailwind-scrollbar-hide'),
    // require('@nextui-org/react'),
    nextui()
  ],
}