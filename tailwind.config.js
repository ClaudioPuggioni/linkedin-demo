/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 15px 1px rgba(255, 106, 0, 0.635)",
      },
    },
  },
  plugins: [],
};
