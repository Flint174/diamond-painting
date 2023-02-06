import "styled-components";
import { StyledTypography } from "./ui/typography";

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

    typography: StyledTypography;

    layout: {
      defaultSpacing: 4;
      borderRadius: "4px";
    };
  }
}
