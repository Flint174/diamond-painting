import styled, { css } from "styled-components";
import { BoxProps, getBoxStyles } from "./box";
import { calcSpacing } from "./utils/spacing";

const primaryStyles = css((props) => {
  const { colors } = props.theme;
  return {
    backgroundColor: colors.primary,
    color: colors.primaryContent,
    ":hover": {
      backgroundColor: colors.primary,
      color: colors.primaryContent,
      WebkitTapHighlightColor: "transparent",
      outline: "none",
      msTouchAction: "manipulation",
      touchAction: "manipulation",
    },
    ":active": {
      backgroundColor: colors.primary,
      color: colors.primaryContent,
      WebkitTapHighlightColor: "transparent",
      outline: "none",
      msTouchAction: "manipulation",
      touchAction: "manipulation",
    },
    ":disabled": {
      backgroundColor: colors.primary,
      color: colors.primaryContent,
      cursor: "not-allowed",
    },
  };
});

const secondaryStyles = css((props) => {
  const { colors } = props.theme;
  return {
    backgroundColor: colors.secondary,
    color: colors.secondaryContent,
    ":hover": {
      backgroundColor: colors.secondary,
      color: colors.secondaryContent,
      WebkitTapHighlightColor: "transparent",
      outline: "none",
      msTouchAction: "manipulation",
      touchAction: "manipulation",
    },
    ":active": {
      backgroundColor: colors.secondary,
      color: colors.secondaryContent,
      WebkitTapHighlightColor: "transparent",
      outline: "none",
      msTouchAction: "manipulation",
      touchAction: "manipulation",
    },
    ":disabled": {
      backgroundColor: colors.secondary,
      color: colors.secondaryContent,
      cursor: "not-allowed",
    },
  };
});

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  fullwidth?: boolean;
}

const buttonMixin = css<ButtonProps>((props) =>
  props.primary ? primaryStyles : secondaryStyles
);

export const Button = styled.button.attrs((props) => ({
  pt: 2,
  pb: 2,
  pl: 4,
  pr: 4,
  ...props,
}))<ButtonProps & BoxProps>`
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.625rem;
  display: flex;
  min-height: 2.625rem;
  align-items: center;
  justify-content: center;
  width: ${(p) => (p.fullwidth ? "100%" : "auto")};
  gap: ${(p) => calcSpacing(p.theme.layout.defaultSpacing, 2)};
  border-radius: ${(p) => p.theme.layout.borderRadius};
  ${getBoxStyles};
  ${buttonMixin};
`;
