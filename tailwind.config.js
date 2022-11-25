/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9BE3DE",
          secondary: "#BEEBE9",
          accent: "#FFFDF9",
          neutral: "#FFE3ED",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
