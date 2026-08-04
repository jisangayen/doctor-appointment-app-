/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // main brand color
        primaryDark: "#4FB8C0", // hover buttons / active states
        primaryLight: "#EAFBFC", // section background / cards
        secondary: "#FFFFFF", // main page background
        accent: "#3B82F6", // links / highlights / badges
        textPrimary: "#1F2937", // headings
        textSecondary: "#6B7280", // paragraph text
        border: "#D1D5DB", // inputs / cards border
        success: "#22C55E", // appointment confirmed
        danger: "#EF4444",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr ))",
      },
    },
  },
  plugins: [],
};
