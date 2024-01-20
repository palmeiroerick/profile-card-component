import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      darkCyan: "#19a2ae",
      veryDarkDesaturatedBlue: "#2d3248",
      darkGrayishBlue: "#6a6f81",

      /* Neutral */
      white: "#ffffff",
      darkGray: "#969696",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    backgroundImage: {
      card: "url('/assets/bg-pattern-card.svg')",
    },
  },
  plugins: [],
};

export default config;
