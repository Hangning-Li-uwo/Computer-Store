import { teal, lightBlue, blue, grey, blueGrey } from "@mui/material/colors";

export const themeSettings = (mode) => {
  return {
    palette: {
      // light mode palette
      // primary: {
      //   dark: "#d9687e",
      //   main: "#fe4066",
      //   light: grey[200],
      // },
      neutral: {
        dark: "#333333",
        main: "#666666",
        mediumMain: "#858585",
        medium: "#A3A3A3",
        light: "#F0F0F0",
      },
      background: {
        default: lightBlue[50],
      },
    },
    typography: {
      fontSize: 14,
      subtitle1: {
        fontSize: 12,
      },
      button: {
        textTransform: "none",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        // margin: "20px 20px",
      },
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  };
};