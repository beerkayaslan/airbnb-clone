/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "roboto": ["roboto", "sans-serif"],
    },
    extend: {
      colors: theme => ({
        'brand-color': '#ff385c',
      })
    },
  },
  plugins: [
  ]
}
