/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E6',
          100: '#FFF2CC',
          200: '#FFE699',
          300: '#FFD966',
          400: '#E8C55A',
          500: '#D4AF37',
          600: '#BF9B30',
          700: '#A67C00',
          800: '#8C6900',
          900: '#735500',
        },
        ink: {
          50: '#F7F6F3',
          100: '#E9E7E1',
          300: '#B9B5AA',
          400: '#9A958A',
          500: '#77736A',
          700: '#3A3833',
          800: '#26251F',
          900: '#1A1916',
          950: '#0F0E0C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
