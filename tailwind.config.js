/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./client/src/**/*.{html,js}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

