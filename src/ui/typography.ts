import styled, { css } from "styled-components";

export interface StyledFont {
  fontWeight: number | string;
  fontSize: number | string;
  lineHeight: number | string;
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

type TypographyMixin = TypographySize & TypographyColor;

interface TextBlockProps extends TypographyMixin {
  renderTag: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const typography: StyledTypography = {
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

export const typographyMixin = css<TypographyMixin>`
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

export const P = styled.p`
  ${typographyMixin}
`;

export const Span = styled.span`
  ${typographyMixin}
`;

export const H1 = styled.h1`
  ${typographyMixin}
`;

export const H2 = styled.h2`
  ${typographyMixin}
`;

export const H3 = styled.h3`
  ${typographyMixin}
`;

export const H4 = styled.h4`
  ${typographyMixin}
`;

export const H5 = styled.h5`
  ${typographyMixin}
`;

export const H6 = styled.h6`
  ${typographyMixin}
`;

// export const TextBlock = (<TextBlockProps>(props) => {

// });
