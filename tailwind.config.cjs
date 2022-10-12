module.exports = {
  content: ["./index.html", "./src/**/*.{ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "384px",
      },
      colors: {
        primary: "#FDC6B5 ",
        second: "#2C3E50",
      },
    },
    fontFamily: {
      sans: ["Noto Sans TC", "Roboto"],
      serif: ["Noto Serif TC", "Times"],
      dela: ["Dela Gothic One"],
    },
  },
};
