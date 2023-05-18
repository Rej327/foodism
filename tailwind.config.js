/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  important: "#root",
  theme: {
    fontFamily: {
      head: ["Oswald", "sans-serif"],
      body: ["Raleway", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
