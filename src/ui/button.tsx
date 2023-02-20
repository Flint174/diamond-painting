import { FC } from "react";
import styled, { css } from "styled-components";
import { BoxProps, getBoxStyles } from "./box";
import { Icon } from "./icon";
import { TextBlock, TypographySizeProps } from "./typography";
import { calcSpacing } from "./utils/spacing";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  flat?: boolean;
  fullwidth?: boolean;
  color?: string;
  bgColor?: string;
  label?: string;
  icon?: string;
  iconSize?: string;
  dense?: boolean;
  onClick?: () => void;
}

const primaryStyles = css<ButtonProps>(
  ({ color, bgColor, theme: { colors } }) => {
    const backgroundColor = bgColor || colors.primary;
    const contentColor = color || colors.primaryContent;
    return {
      backgroundColor,
      color: contentColor,
      ":hover": {
        backgroundColor,
        color: contentColor,
        WebkitTapHighlightColor: "transparent",
        outline: "none",
        msTouchAction: "manipulation",
        touchAction: "manipulation",
      },
      ":active": {
        backgroundColor,
        color: contentColor,
        WebkitTapHighlightColor: "transparent",
        outline: "none",
        msTouchAction: "manipulation",
        touchAction: "manipulation",
      },
      ":disabled": {
        backgroundColor,
        color: contentColor,
        cursor: "not-allowed",
      },
    };
  }
);

const secondaryStyles = css<ButtonProps>(
  ({ color, bgColor, theme: { colors } }) => {
    const backgroundColor = bgColor || colors.secondary;
    const contentColor = color || colors.secondaryContent;
    return {
      backgroundColor,
      color: contentColor,
      ":hover": {
        backgroundColor,
        color: contentColor,
        WebkitTapHighlightColor: "transparent",
        outline: "none",
        msTouchAction: "manipulation",
        touchAction: "manipulation",
      },
      ":active": {
        backgroundColor,
        color: contentColor,
        WebkitTapHighlightColor: "transparent",
        outline: "none",
        msTouchAction: "manipulation",
        touchAction: "manipulation",
      },
      ":disabled": {
        backgroundColor,
        color: contentColor,
        cursor: "not-allowed",
      },
    };
  }
);

const buttonMixin = css<ButtonProps>(({ primary }) =>
  primary ? primaryStyles : secondaryStyles
);

export const StyledButton = styled.button.attrs<
  ButtonProps & BoxProps,
  ButtonProps & BoxProps
>((props) => {
  return props.dense
    ? { p: 0, m: 0, ...props }
    : //   props
      //   { p: props.p ?? 0, m: props.m ?? 0, ...props }
      {
        pt: 2,
        pb: 2,
        pl: 4,
        pr: 4,
        ...props,
      };
})<ButtonProps & BoxProps>`
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.625rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 2.625rem;
  align-items: center;
  justify-content: center;
  width: ${(p) => (p.fullwidth ? "100%" : "auto")};
  gap: ${(p) => calcSpacing(p.theme.layout.defaultSpacing, 2)};
  border-radius: ${(p) => p.theme.layout.borderRadius};
  ${getBoxStyles};
  ${buttonMixin};
`;

export const Button: FC<ButtonProps & TypographySizeProps> = ({
  icon,
  label,
  size,
  color,
  flat,
  bgColor,
  iconSize,
  ...props
}) => {
  const isFlat = (value: string | undefined) => (flat ? "inherit" : value);
  return (
    <StyledButton
      {...props}
      color={isFlat(color)}
      bgColor={isFlat(bgColor)}
      flat={flat}
    >
      {icon && <Icon src={icon} size={iconSize || "1rem"} />}
      {label && (
        <TextBlock renderTag="p" size={size} color={isFlat(color)}>
          {label}
        </TextBlock>
      )}
    </StyledButton>
  );
};
