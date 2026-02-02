/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#3CA4F4',
          dark: '#2A8FD9',
          light: '#6BB8F7',
        },
        // Dark colors for text
        dark: {
          DEFAULT: '#1E1E1E',
          50: '#2D2D2D',
          100: '#1A1A1A',
        },
        // Gray palette - unified
        gray: {
          50: '#F9FAFB',
          100: '#F5F6FC',
          200: '#E5E7EB',
          light: '#DFDFDF',
          medium: '#8E8E8E',
          muted: '#5a5a5a',
        },
        // Background colors
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F9FB',
        },
        // Status colors
        success: '#27AE60',
        warning: '#F39C12',
        danger: '#E74C3C',
      },
      borderRadius: {
        'sm': '6px',
        'DEFAULT': '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        'card': '15px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
