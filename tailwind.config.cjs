/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#375A47'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        display: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
}
