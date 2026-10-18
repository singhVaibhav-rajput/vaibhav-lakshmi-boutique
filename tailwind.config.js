/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#252522',
        muted: '#77756f',
        paper: '#f8f5f0',
        rose: '#c77d7d',
        'rose-dark': '#a95f63',
        line: '#e8e1d9',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 16px 50px rgba(51, 38, 32, .08)',
      },
    },
  },
  plugins: [],
}