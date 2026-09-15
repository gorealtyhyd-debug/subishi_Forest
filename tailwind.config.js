/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#0E2E22", 700: "#14372A", 500: "#2C4C3E", 300: "#46695A" },
        cream: { DEFAULT: "#FEFBF6", 200: "#EFEADD" }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      maxWidth: { shell: "1280px" },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(18px)" }, to: { opacity: "1", transform: "none" } },
        fade: { from: { opacity: "0" }, to: { opacity: "1" } },
        pop: { from: { opacity: "0", transform: "translateY(14px) scale(0.98)" }, to: { opacity: "1", transform: "none" } }
      },
      animation: {
        rise: "rise 0.9s ease both",
        fade: "fade 0.25s ease both",
        pop: "pop 0.35s ease both"
      }
    }
  },
  plugins: []
};
