/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '800000': '#800000',
        '982B1C': '#982B1C',
        'DAD4B5': '#DAD4B5',
        'F2E8C6': '#F2E8C6',
      },
    },
  },
  plugins: [],
}

