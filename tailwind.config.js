/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-image': 'url("/src/assets/home-back.jpeg")',
      },
    },
  },
  plugins: [],
}
