import { ThemeProvider } from "styled-components";

//NOTE - specific color names: white = "babyPowder", black = "rasin black", blue = "payne's gray", red = "bittersweet shimmer"

const myTheme = {
  color: {
    white: "#F5F8F2",
    black: "#2F2422",
    blue: "#376681",
    red: "#C9545E",
  },
  fontFamily: {
    english: "Montserrat, sans-serif;",
    japanese: "'Noto Sans JP', sans-serif;",
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700",
  },
  fontSize: {
    extraSmall: "12px",
    small: "14px",
    regular: "16px",
    large: "29px",
    extraLarge: "50px",
  },
};

export default function AppTheme({ children }) {
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
}
