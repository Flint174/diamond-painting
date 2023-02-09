import "styled-components";
import { TypographySize } from "./ui/typography";

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

    typography: TypographySize;

    layout: {
      defaultSpacing: number | string;
      borderRadius: number | string;
    };
  }
}
