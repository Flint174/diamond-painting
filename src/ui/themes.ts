import { createGlobalStyle, DefaultTheme } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
`;

export const defaultTheme: DefaultTheme = {
  //   borderRadius: "10px",
  //   colors: { primary: "red", secondary: "blue" },
};
