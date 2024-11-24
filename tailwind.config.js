/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#e0f2e6",
          medium: "#68b4a4",
          darkish: "#4e7980",
          verydark: "#20283d",
        },
      },
      animation: {
        appear: "appear 1s ease-out",
      },
      keyframes: {
        appear: {
          "0%": { transform: "translateY(500px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
