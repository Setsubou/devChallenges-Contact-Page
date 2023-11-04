/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        contactPurple: "#4036A9",
        blueGray: "#111729",
        whiteBackground: "#F8FAFC",
      },
      fontFamily: {
        vietnam: ['Be Vietnam Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

