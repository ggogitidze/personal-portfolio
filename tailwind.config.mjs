/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // We keep this but design is primarily light/monochrome
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // Pure white
        foreground: '#171717', // Pure black text
        accent: '#FF4500', // The "Punch" Orange-Red
        subtle: '#F5F5F5', // Light grey for sections
        medium: '#CCCCCC', // Medium grey for dividers/secondary text
        dark: '#333333', // Dark grey for hover
        border: '#000000', // Black for hairlines
      },
      fontFamily: {
        sans: ['var(--font-urbanist)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
}; 