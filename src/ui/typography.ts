import { css } from "styled-components";

export interface StyledFont {
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
}

export interface StyledTypography {
  huge: StyledFont;
  large: StyledFont;
  medium: StyledFont;
  default: StyledFont;
}

interface TypographySize {
  size?: keyof StyledTypography;
}

interface TypographyColor {
  color?: string;
}

export const typography: StyledTypography = {
  huge: {
    fontWeight: 700,
    fontSize: 36,
    lineHeight: 44,
  },
  large: {
    fontSize: 700,
    fontWeight: 24,
    lineHeight: 29,
  },
  medium: {
    fontSize: 700,
    fontWeight: 20,
    lineHeight: 24,
  },
  default: {
    fontSize: 400,
    fontWeight: 16,
    lineHeight: 19,
  },
};

export const typographySizeMixins = css<TypographySize>((props) => {
  const { size } = props;
  const selectedSize = props.theme.typography[size ?? "default"];
  return {
    fontWeight: selectedSize.fontWeight,
    fontSize: selectedSize.fontSize,
    lineHeight: selectedSize.lineHeight,
  };
});

export const typographyColoMixin = css<TypographyColor>((props) => {
  const selectedColor = () => {
    const { colors } = props.theme;
    switch (props.color) {
      case "danger":
        return colors.danger;
      case "primary":
        return colors.textPrimary;
      case "secondary":
        return colors.textSecondary;
      case "overlay":
        return colors.textOverlay;

      default:
        return props.color;
    }
  };

  const colorToApply = selectedColor();
  return {
    color: colorToApply,
    fill: colorToApply,
  };
});

export const typographyMixin = css<TypographySize & TypographyColor>`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  word-break: break-word;
  ${typographySizeMixins};
  ${typographyColoMixin};
  ${/* getBoxStyles */ ""};
`;
