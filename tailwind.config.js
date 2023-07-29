/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#00274C",
        bluemine: "#0061BF",
        orangemine: "#FF5722",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
