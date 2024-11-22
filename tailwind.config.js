/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ["Pixelify Sans", "sans-serif"], // Add fallback fonts for safety
      },
      fontWeight: {
        thin: 100, 
      },
    },
  },
  plugins: [],
};
