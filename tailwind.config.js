/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      headline: 'clamp(42px, 3.125vw, 60px)',
    },
  },
  plugins: [],
}

