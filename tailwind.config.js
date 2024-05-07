const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-barlow)'],
        sans: ['var(--font-ibm-sans)'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}