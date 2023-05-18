/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.js",
    "./resources/**/*.vue"
  ],
  theme: {
    extend: {
      height: {
        'minus-64px': 'calc(100vh - 64px)',
        'minus-250px': 'calc(100vh - 250px)',
        'minus-275px': 'calc(100vh - 275px)',
        'minus-300px': 'calc(100vh - 300px)',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /text-+/, // 👈  This includes bg of all colors and shades
    },
  ],
}

