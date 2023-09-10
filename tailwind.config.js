/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      dark: {
        bg: 'bg-gray-900', 
        text: 'text-white', 
      },
      
      light: {
        bg: 'bg-white', 
        text: 'text-gray-800',
      },
    },
  },
  plugins: [],
}

