import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34495E",
        secondary: "#7F8C8D",
        grey: "#ECF0F1",
        lightblue: "#cce2e8",
        blue: "#3498db",
      },
    },
  },
  plugins: [],
};
export default config;
