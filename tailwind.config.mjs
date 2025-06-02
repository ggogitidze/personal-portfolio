/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#D6D5DA',
        accent: '#7963E6',
        foreground: '#171717',
        'background-dark': '#0a0a0a',
        'foreground-dark': '#ededed',
      },
      borderRadius: {
        '2xl': '1.5em',
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgba(0,0,0,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}; 