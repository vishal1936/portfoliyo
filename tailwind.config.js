/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      /* Light theme palette. Names are legacy (kept so components don't
         need touching), values are re-mapped for a light background. */
      brown: "#f1e4d6",
      lightBrown: "#ddc9b8",
      darkBrown: "#faf6f1",
      black: "#1a1512",
      white: "#241d19",
      cream: "#f7f1ea",
      cyan: "#0891a8",
      lightCyan: "#8be6f0",
      darkCyan: "#066979",
      orange: "#d9730a",
      lightOrange: "#fac27b",
      darkOrange: "#b8600b",
      grey: "#8a7d76",
      lightGrey: "#6b5f58",
      darkGrey: "#3f4441",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(8, 145, 168, 0.35)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(8, 145, 168, 0.18)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(8, 145, 168, 0.25)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(217, 115, 10, 0.18)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(217, 115, 10, 0.25)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
