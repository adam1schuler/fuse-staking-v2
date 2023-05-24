// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{ts,tsx,scss,css}", "index.html"],
  theme: {
    screens: {
      "4xl": { max: "2699px" },
      "3xl": { max: "1750px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    colors: {
      chargePurple: "#240046",
      navy: "#071927",
      "light-gray": "#F3F3F3",
      "bg-dark-gray": "#F3F3F3",
      "modal-bg": "#F2F2F2",
      lightBlue: "#063B64",
      purple: "#7A159A",
      gray: "#BABABA",
      "dark-gray": "#E7E7E7",
      "selected-gray": "#D0D7DE",
      "selected-light-gray": "#E5E7EB",
      "text-dark-gray": "#666666",
      "secondary-gray": "#525252",
      "text-gray": "#9F9F9F",
      "text-darker-gray": "#737373",
      "text-heading-gray": "#4D4D4D",
      "text-inactive": "#D1D1D1",
      "fuse-green": "#20B92E",
      "fuse-green-light": "#B4F9BA",
      white: "#FFFFFF",
      "fuse-black": "#1A1A1A",
      black: "#000000",
      warning: "#FFF3DD",
      error: "#FFDDDD",
      success: "#E0FFDD",
      inactive: "#EBEBEB",
      "warning-dark": "#A86D00",
      "error-dark": "#750000",
      "success-dark": "#0A7500",
      "inactive-dark": "#E5E5E6",
      "button-inactive": "#808080",
    },
    fontFamily: {
      mona: ["Mona-Sans"],
    },
    extend: {
      spacing: {
        0.5: "0.125rem",
        "1/9": "11.1%",
        "8/9": "88.9%",
        "3/10": "30%",
        "1/10": "10%",
        "9/10": "90%",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
    },
  },
};
