/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FAF9F7',
          pink: '#FF6B6B',
          blue: '#A0C4FF',
          dark: '#333333',
          green: '#2F4F4F',
          moss: '#1C3D32',
          beige: '#F5F3F0',
          warmWhite: '#FEFCF8',
        },
        wood: {
          oak: '#7A5230',
          cream: '#FDF6EC',
          sage: '#A9B9A3',
          terracotta: '#D88C6F',
          charcoal: '#4B3D33',
          sand: '#E6DCD1',
        },
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
        'noto': ['Noto Sans KR', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} 