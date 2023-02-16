/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,tsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#8000FF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
