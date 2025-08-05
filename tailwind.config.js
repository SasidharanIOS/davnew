/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'primary': '#02335C',
        'secondary': '#C5ECFF',
        'accent': '#FFC107',
      },
      fontFamily: {
        corporate: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        paragraph: ['Source Sans Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};