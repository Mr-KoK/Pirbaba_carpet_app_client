/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.{tsx,ts,jsx,js}", "./components/**/*.{tsx,ts,jsx,js}"],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};