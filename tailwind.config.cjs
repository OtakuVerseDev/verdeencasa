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
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
};
