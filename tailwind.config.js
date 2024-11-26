/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        combineshadow:
          "0px 2px 4px 1px rgba(0,0,0,0.6),0px 7px 6px -3px rgba(0,0,0,0.33),0px -3px 0px 0px rgba(0,0,0,0.2) inset",
      },
      colors: {
        "brand-primary":"#208D8E",
        pending: "#F92E8F",
        open: "#FD7E14",
        progress: "#4C6EF5",
        do: "#4AB7D8",
        low: "#82C91E",
        high: "#FAB005",
        emergency: "#FA5252",
        intermediate: "#15AABF",
      },
      fontWeight: {
        thin: "100",
        "extra-light": "200",
        light: "300",
        normal: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
        "extra-black": "950",
      },
      fontFamily: {
        "Iran-Yekan": "IRAN-Yekan",
        Segoe: "Segoe.UI",
      },
    },
  },
  safelist: [
    {
      pattern:
        /text-(brand-primary|pending|open|progress|do|low|high|emergency|intermediate)/,
    },
    { pattern: /bg-(brand-primary|pending|open|progress|do|low|high|emergency|intermediate)/, },
    { pattern: /border-(brand-primary|pending|open|progress|do|low|high|emergency|intermediate)/, },
  ],
  plugins: [require("tailwind-scrollbar")],
};
