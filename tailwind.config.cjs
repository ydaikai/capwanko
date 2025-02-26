/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      colors: {
        white: '#f8f9fa'
      },
      fontFamily: {
        body: ['-apple-system', 'BlinkMacSystemFont', 'NotoSansJP', 'sans-serif']
      },
      gridTemplateColumns: {
        list: 'repeat(auto-fill, minmax(400px, max-content))'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
