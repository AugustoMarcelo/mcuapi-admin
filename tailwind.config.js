/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          100: '#E6E6E6',
          150: '#EBE6E6',
          200: '#D1CDCD',
          250: '#CCCCCC',
          300: '#C4C4C4',
          350: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          750: '#444444',
          800: '#333333',
          850: '#2B2B2B',
          900: '#1A1A1A',
        },
        blue: {
          100: '#2693FF',
          200: '#0074E8',
          500: '#0059AA',
        },
        purple: {
          500: '#2B3784',
          700: '#302A5C',
        },
        red: {
          200: '#B84A4C',
          500: '#B11313',
          700: '#7E1120',
        },
        green: {
          200: '#3DD18D',
          400: '#2CB777',
        },
        pink: {
          500: '#F02958',
          700: '#D71A47',
        },
        yellow: {
          200: '#FFD940',
          500: '#FFCC00',
        },
      },
      boxShadow: {
        button: '0 4px 4px rgba(0,0,0,.25)',
        card: '0px 2px 4px rgba(0, 0, 0, 0.5);',
      },
      gridTemplateColumns: {
        sidebar: '230px minmax(0, 1fr)',
      },
    },
  },
  plugins: [],
};
