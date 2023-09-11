/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'su-', 
  content: ["./src/**/*.{html,js,jsx,astro}"],
  theme: {
    extend: {},
  },
  presets: [
    require('decanter')
  ],
  content: ["./src/**/*.{html,js,astro}"],
    theme: {
      extend: {},
    },
  plugins: [],
}