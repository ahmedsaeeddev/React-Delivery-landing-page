/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#E94339",
        secondaryColor: "#FFB02D",
        textColor: "#333333",
      }
    },
  },
  plugins: [],
}