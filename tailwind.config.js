/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#ff3d00",
        "secondary-color": "#2f3746",
        "bg-color": "#151921",
      },
    },
  },
  plugins: [],
};
