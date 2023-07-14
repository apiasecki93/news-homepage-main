/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        gold: "#e9ab53",
        tomato: "#f15e50",
        veryDarkBlue: "#00001a",
        charcoalGrey: "#36384e",
        greyNr: "#c8c7cd",
      },
      screens: {
        ssm: { max: "375px" },
        mmin: { min: "376px" },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
};
