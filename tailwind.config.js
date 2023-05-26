/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      part: "p-[10px] bg-white",
    },
    screens: {
      mobile: "320px",

      tablet: "768px",

      desktop: "1100px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      backDrop: "rgba(var(--color-backDrop-bcg) / <alpha-value>)",
    },
  },
  plugins: [],
};
