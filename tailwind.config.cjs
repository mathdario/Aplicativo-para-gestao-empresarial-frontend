/** @type {import('tailwindcss').Config} */
let plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      nuni: ["Nunito", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "login-img": "url('../loginImg.png')",
      },
      colors: {
        LoginGreen: "#034A2A",
        textGreen: "#0E8750",
        lightGreen: "#ACD9C5",
        baseLight: "#F8F8F9",
        basePink: "#DA0175",
        lightPink: "#F5A8D0",
        darkPink: "#75003B",
        expired: "#FFEFEF",
        future: " #FCF6DC",
        payed: "#EEF7F7",
        softGray: "#F0F0F5",
        hardGray: "#343447",
        "payed-600": "#1FA7AF",
        "future-600": "#C5A605",
        "expired-600": "#971D1D",
      },
      borderRadius: {
        "4xl": "1.875rem", //Equivalent to 30px
      },
      fontSize: {
        xxs: "0.5rem", //Equivalent to 8px
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchVariant, theme }) {
      matchVariant(
        "nth",
        (value) => {
          return `&:nth-last-child(${value})`;
        },
        {
          values: {
            DEFAULT: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
          },
        }
      );
    }),
  ],
};
