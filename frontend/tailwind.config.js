/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
// }

  theme: {
    extend: {
      animation: {
        zoomIn: 'zoomIn 1s ease-out',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out',
        bounceInLeft: 'bounceInLeft 1s ease-out',
        bounceInRight: 'bounceInRight 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-in-out',
      },
      keyframes: {
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        bounceInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '60%': { opacity: 1, transform: 'translateX(30px)' },
          '80%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceInRight: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '60%': { opacity: 1, transform: 'translateX(-30px)' },
          '80%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],


};

