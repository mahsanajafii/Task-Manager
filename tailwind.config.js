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
        "brand-primary": "#208D8E",
        "brand-Secondary": "#C2F7FA",
        "red-Secondary": "#FFE3E3",
        "red-primary": "#FA5252",
        "pink-Secondary": "#FFDEEB",
        "pink-primary": "#E64980",
        "grape-Secondary": "#F3D9FA",
        "grape-primary": "#BE4BDB",
        "violet-Secondary": "#E5DBFF",
        "violet-primary": "#7950F2",
        "indigo-Secondary": "#DBE4FF",
        "indigo-primary": "#4C6EF5",
        "blue-Secondary": "#D0EBFF",
        "blue-primary": "#228BE6",
        "cyan-Secondary": "#C5F6FA",
        "cyan-primary": "#15AABF",
        "teal-Secondary": "#C3FAE8",
        "teal-primary": "#12B886",
        "green-Secondary": "#D3F9D8",
        "green-primary": "#40C057",
        "lime-Secondary": "#E9FAC8",
        "lime-primary": "#82C91E",
        "yellow-Secondary": "#FFF3BF",
        "yellow-primary": "#FAB005",
        "orange-Secondary": "#FFE8CC",
        "orange-primary": "#FD7E14",
        
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
        /text-(brand-primary|yellow-primary|orange-primary|indigo-primary|pink-primary|lime-primary|red-primary|cyan-primary)/,
    },
    {
      pattern:
        /bg-(brand-primary|yellow-primary|orange-primary|indigo-primary|pink-primary|lime-primary|red-primary|cyan-primary)/,
    },
    {
      pattern:
        /border-(brand-primary|yellow-primary|orange-primary|indigo-primary|pink-primary|lime-primary|red-primary|cyan-primary)/,
    },
  ],
  plugins: [require("tailwind-scrollbar")],
};
