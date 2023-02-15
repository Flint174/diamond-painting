import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { BoxProps, getBoxStyles } from "./box";

export interface StyledFont {
  fontWeight: number | string;
  fontSize: number | string;
  lineHeight: number | string;
}

export interface TypographySize {
  huge: StyledFont;
  large: StyledFont;
  medium: StyledFont;
  default: StyledFont;
}

export interface TypographySizeProps {
  size?: keyof TypographySize;
}

export interface TypographyColorProps {
  color?: string;
}

type TypographyMixin = TypographySizeProps & TypographyColorProps;

export interface TextBlockProps extends TypographyMixin, BoxProps {
  renderTag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: ReactNode;
}

export const typographySizeMixins = css<TypographySizeProps>((props) => {
  const { size } = props;
  const selectedSize = props.theme.typography[size ?? "default"];
  return {
    fontWeight: selectedSize.fontWeight,
    fontSize: selectedSize.fontSize,
    lineHeight: selectedSize.lineHeight,
  };
});

export const typographyColoMixin = css<TypographyColorProps>((props) => {
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
  ${getBoxStyles};
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

export const TextBlock: FC<TextBlockProps> = ({
  renderTag = "span",
  color = "primary",
  size = "default",
  children,
  ...props
}) => {
  switch (renderTag) {
    case "h1":
      return (
        <H1 {...props} color={color} size={size}>
          {children}
        </H1>
      );
    case "h2":
      return (
        <H2 {...props} color={color} size={size}>
          {children}
        </H2>
      );
    case "h3":
      return (
        <H3 {...props} color={color} size={size}>
          {children}
        </H3>
      );
    case "h4":
      return (
        <H4 {...props} color={color} size={size}>
          {children}
        </H4>
      );
    case "h5":
      return (
        <H5 {...props} color={color} size={size}>
          {children}
        </H5>
      );
    case "h6":
      return (
        <H6 {...props} color={color} size={size}>
          {children}
        </H6>
      );
    case "p":
      return (
        <P {...props} color={color} size={size}>
          {children}
        </P>
      );
    case "span":
      return (
        <Span {...props} color={color} size={size}>
          {children}
        </Span>
      );
  }
};
