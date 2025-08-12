/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        "heading-large": ["2.5rem", { fontWeight: "600" }],
        "heading-small": ["2rem", { fontWeight: "600" }],
        "button-medium": ["1rem", { fontWeight: "600" }],
        "button-small": ["0.625rem", { fontWeight: "600" }],
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(to bottom right, rgba(183, 135, 245, 1), rgba(116, 62, 228, 1))",
      },
      colors: {
        "editor-light": "#FFFFFF",
        "editor-dark": "#121826",
        "selection-button": "#CED6E1",
        "share-button": "#406AFF",
      },
      backgroundColor: {
        "editor-light": "#FFFFFF",
        "editor-dark": "#121826",
        "selection-button": "#CED6E1",
        "share-button": "#406AFF",
      },
    },
  },
  plugins: [],
};
