import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#34495E",
        secondary: "#7F8C8D",
        background: "#ECF0F1",
      },
    },
  },
  plugins: [],
};
export default config;
