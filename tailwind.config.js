/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
        title: ["Cormorant Garamond", "serif"],
      },
      before: {
        content: '""',
      },
      after: {
        content: '""',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".before": {
          "&::before": {
            content: 'var(--before-content, "")',
          },
        },
        ".after": {
          "&::after": {
            content: 'var(--after-content, "")',
          },
        },
      };

      addUtilities(newUtilities, ["before", "after"]);
    },
  ],
};
