/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      h3xl: [
        "2.769rem",
        {
          lineHeight: "3.692rem",
          letterSpacing: "-0.042em",
          fontWeight: "700",
        },
      ],
      h2xl: [
        "2.308rem",
        {
          lineHeight: "3.077rem",
          letterSpacing: "-0.023em",
          fontWeight: "700",
        },
      ],
      h1: [
        "1.846rem",
        {
          lineHeight: "2.462rem",
          letterSpacing: "-0.015em",
          fontWeight: "700",
        },
      ],
      h2: [
        "1.538rem",
        {
          lineHeight: "1.846rem",
          letterSpacing: "-0.015em",
          fontWeight: "600",
        },
      ],
      h3: [
        "1.077rem",
        {
          lineHeight: "1.538rem",
          fontWeight: "600",
        },
      ],
      h4: [
        "1rem",
        {
          lineHeight: "1.538rem",
          fontWeight: "600",
        },
      ],
      "body-lg": [
        "1.077rem",
        {
          lineHeight: "1.538rem",
        },
      ],
      "body-md": [
        "1rem",
        {
          lineHeight: "1.538rem",
        },
      ],
      "body-sm": [
        "0.923rem",
        {
          lineHeight: "1.231rem",
        },
      ],
      "body-xs": [
        "0.846rem",
        {
          lineHeight: "0.857rem",
        },
      ],
    },
    colors: {
      primary: colors.orange[500],
      stone: colors.stone,
      body: {
        light: { primary: colors.stone[900], secondary: colors.stone[700] },
        dark: { primary: colors.stone[200], secondary: colors.stone[400] },
      },
      transparent: {
        default: "transparent",
        light: { hover: colors.stone[100], active: colors.stone[300] },
        dark: { hover: colors.stone[800], active: colors.stone[600] },
      },
      error: colors.red[500],
    },
  },
  darkMode: "class",
};
