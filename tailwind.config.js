/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background": "url('/background.jpg')",
      },
      colors: {
        primary: '#2990d5',
        secondary: '#3b82f6',
      },
      screens: {
        xl1: "1400px", // Definindo um breakpoint para telas maiores que 1400px
        xl2: "1600px", // Definindo um breakpoint para telas maiores que 1600px
      },
    },
  },
  plugins: [],
};
