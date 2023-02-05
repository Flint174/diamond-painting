import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // borderRadius: string;

    colors: {
      background: string;
      backgroundAlt: string;
      primary: string;
      secondary: string;
      primaryContent: string;
      secondaryContent: string;
      textPrimary: string;
      textSecondary: string;
      textOverlay: string;
      danger: string;
    };
  }
}
