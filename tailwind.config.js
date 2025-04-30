/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "Raleway"],
      },
      colors: {
        background: "#323333",
      },
      textUnderlineOffset: {
        10: "20px", // Custom underline offset
        12: "24px",
      },
    },
  },
  plugins: [],
};
