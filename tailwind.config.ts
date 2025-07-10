import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        link: 'var(--link-color)',
        body: 'var(--body-color)',
        background: 'var(--body-background)'
      },
      boxShadow: {
        card: '0 0.5rem 1.25rem rgba(0, 0, 0, 0.2)',
        cardHover: '0 1.125rem 2.5rem rgba(0, 179, 255, 0.2)',
        cardDefault: '0 0.5rem 1.25rem rgba(0, 0, 0, 0.2)',
        tag: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        fadeZoomIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeZoomIn: 'fadeZoomIn 0.3s ease-out',
      },
    }
  },
  darkMode: 'class',
};

export default config;
