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
          teal: "#4ECDC4",
          text: "#2C3E50",
          headline: "#1A252F",
          secondary: "#64748B",
          tertiary: "#94A3B8",
        },
        success: "#52C41A",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "system-ui", "sans-serif"],
      },
      spacing: {
        "xs": "8px",
        "sm": "16px", 
        "md": "24px",
        "lg": "32px",
        "xl": "48px",
        "2xl": "64px",
        "3xl": "80px",
      },
      borderRadius: {
        "sm": "12px",
        "md": "16px", 
        "lg": "24px",
      },
      backdropBlur: {
        "light": "20px",
        "heavy": "40px",
      },
      animation: {
        "slide-in": "slideIn 0.4s cubic-bezier(0.2, 0.9, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
