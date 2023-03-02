/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        crimson: ['var(--font-crimson)'],
        lato: ['var(--font-lato)'],
      },
      colors:{
        rose: "#D9CDF7",
        myBlue:"#271A45"
      }
    },
  },
  plugins: [],
}
