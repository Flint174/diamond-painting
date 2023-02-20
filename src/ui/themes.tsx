import { createGlobalStyle, DefaultTheme } from "styled-components";
import { normalize } from "styled-normalize";
import VarelaRound from "../fonts/varela-rounds/VarelaRound-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    @font-face {
        font-family: "Varela Round";
        src: local("Varela Round"), url(${VarelaRound}) format('truetype');
    }

    body {
        background-color: ${(p) => p.theme.colors.background};
    }
`;

export const mainTheme: DefaultTheme = {
  colors: {
    background: "#FFC8DD",
    backgroundAlt: "grey",
    danger: "red",
    primary: "#A2D2FF",
    primaryContent: "#0C0A3E",
    secondary: "green",
    secondaryContent: "black",
    textOverlay: "grey",
    textPrimary: "#0C0A3E",
    textSecondary: "grey",
  },
  layout: {
    borderRadius: "0.25rem",
    defaultSpacing: "0.25rem",
  },
  typography: {
    font: [
      "Varela Round",
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Open Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
    size: {
      huge: {
        fontWeight: 700,
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
      },
      large: {
        fontWeight: 700,
        fontSize: "1.5rem",
        lineHeight: "1,8125rem",
      },
      medium: {
        fontWeight: 700,
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
      },
      default: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1,1875rem",
      },
    },
  },
};
