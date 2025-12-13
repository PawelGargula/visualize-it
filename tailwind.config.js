/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#D4AF37',
        'secondary-gold': '#BF9B30',
        'accent-gold': '#F2C13E'
      }
    },
  },
  plugins: [],
}