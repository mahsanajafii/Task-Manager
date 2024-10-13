/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
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
  plugins: [],
}

