// tailwind.config.mjs
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all pages
    "./components/**/*.{js,ts,jsx,tsx}", // Include all components
     "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      
      fontFamily: {
        cinzel: ["'Cinzel'", "serif"],
        brittany: ["'Brittany Signature'", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        chocolate: {
          900: "#2B2118",
          800: "#3E2C24",
          700: "#523F34",
        },
        offwhite: "#F5F5F5",
        gold: "#C0A265",
      },
    },
  },
  plugins: [],
};
