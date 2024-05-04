/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"]
      },
      colors: {
        primary: "#33211d",
        darkPrimary: "#1a0b0b",
        secondary: "#da9f5b",
        white: "#fff",
        overlay: "#33211db3",
        light: "#fffbf2",
        grayText: "#555555"
      }
    },
  },
  plugins: [],
};
