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
          400: '#FFCC33',
          500: '#D4AF37', /* Main gold color */
          600: '#BF9B30',
          700: '#A67C00',
          800: '#8C6900',
          900: '#735500',
        },
        blue: {
          800: '#1E40AF',
          900: '#1E3A8A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
      },
      boxShadow: {
        'inner-gold': 'inset 0 2px 4px 0 rgba(212, 175, 55, 0.06)',
      },
    },
  },
  plugins: [],
};