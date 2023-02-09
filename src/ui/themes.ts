import { createGlobalStyle, DefaultTheme } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
`;

export const mainTheme: DefaultTheme = {
  colors: {
    background: "white",
    backgroundAlt: "grey",
    danger: "red",
    primary: "blue",
    primaryContent: "yellow",
    secondary: "green",
    secondaryContent: "black",
    textOverlay: "grey",
    textPrimary: "black",
    textSecondary: "grey",
  },
  layout: {
    borderRadius: "0.25rem",
    defaultSpacing: "0.25rem",
  },
  typography: {
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
};
