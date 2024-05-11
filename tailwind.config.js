/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      colors: {
        "main-color": "#10151D",
        "purple-color": "rgb(142 102 221)",
      },
    },
  },
  plugins: [],
};
