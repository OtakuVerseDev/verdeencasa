/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}',
    './src/**/*',
  ],
  theme: {
    extend: {
      colors: {
        'accent-primary': 'var(--color-accent-primary)',
      },
      fontFamily: {
        display: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
    },
  },
  plugins: [],
};
