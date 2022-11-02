/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "1px 1px 3px 0.5px rgba(57, 57, 56, 0.404)",
      },
    },
  },
  plugins: [],
};
