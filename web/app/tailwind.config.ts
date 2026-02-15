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
        primary: {
          DEFAULT: "#4086FC",
          light: "#91BAFF",
          dark: "#2C5AA0",
        },
        activity: "#4086FC",
        reminder: "#F5A623",
        content: "#7ED321",
        purchase: "#D0021B",
        appointment: "#9013FE",
        background: "#F5F5F5",
        card: "#FFFFFF",
        text: {
          primary: "#333333",
          secondary: "#888888",
        },
        success: "#7ED321",
        warning: "#F5A623",
        error: "#D0021B",
      },
      fontFamily: {
        sans: ["SF Pro Text", "Noto Sans", "system-ui", "sans-serif"],
        display: ["SF Pro Display", "Noto Sans", "system-ui", "sans-serif"],
        accent: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
