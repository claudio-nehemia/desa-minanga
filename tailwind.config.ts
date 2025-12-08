import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFBF7',
          100: '#FFF5ED',
          200: '#FFE8DC',
          300: '#FFD9C5',
          400: '#FFCAAE',
          500: '#F5E6D3',
          600: '#E8D5BC',
          700: '#D4B896',
          800: '#B89968',
          900: '#A07B47',
        },
        brown: {
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#E8DCC9',
          300: '#DBC9AC',
          400: '#CEB68F',
          500: '#8B6F47',
          600: '#785F3D',
          700: '#6B5332',
          800: '#5C4728',
          900: '#4F3A1F',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-in': 'bounceIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
