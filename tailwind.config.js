/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
          navy: '#024959',        // ✅ your new primary color
          accent: '#77CFD9',       // ✅ your turquoise
        softwhite: '#f8f8f8',    // ✅ soft text color
      },
    },
  },
  plugins: [],
}

