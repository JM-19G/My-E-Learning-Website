// tailwind.config.js   (in project root)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agri-green': '#2e7d32',
        'agri-light': '#e8f5e9',
        'agri-dark': '#1b5e20',
      },
    },
  },
  plugins: [],
}