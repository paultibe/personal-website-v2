import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-background": "var(--main-background)",
        "main-text": "var(--main-text)",
        "highlight-blue": "var(--highlight-blue)",
        "custom-yellow": "#f6be00",
        "highlight-red": "var(--highlight-red)",
      },
      fontFamily: {
        main: ["Nunito", "sans-serif"],
      },
      skew: {
        "-13": "-13deg",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

export default config;
