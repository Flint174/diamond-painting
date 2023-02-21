import { FC } from "react";
import styled, { css } from "styled-components";
import { Box, BoxProps, getBoxStyles } from "./box";
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

const primaryStyles = css<ButtonProps>`
  background: ${(p) =>
    p.bgColor || `linear-gradient(to bottom, #cae6ff, #5eb1fd 66%, #a2d2ff)`};
  color: ${(p) => p.color || p.theme.colors.primaryContent};
  border-radius: 2rem;
  /* box-shadow: inset 1rem 1rem #5daaf1; */

  &::after {
    content: "";
    background: linear-gradient(to top, #ffffff7f, #ffffff00 60%);
    border-radius: 0 0 1rem 1rem;
    position: absolute;
    width: calc(100% - 1.5rem);
    height: 50%;
    overflow: hidden;
    transform: translate(0, -70%);
    z-index: 1;
  }
`;

// const primaryStyles = css<ButtonProps>(
//   ({ color, bgColor, theme: { colors } }) => {
//     // const backgroundColor = bgColor || colors.primary;
//     const background = bgColor || colors.primary;
//     const contentColor = color || colors.primaryContent;
//     return {
//       //   backgroundColor,
//       background:
//         bgColor || `linear-gradient(to bottom, #CAE6FF, #5EB1FD 66%, #A2D2FF)`,
//       color: contentColor,
//       "::after": {
//         content: " <- EXCITING!",
//         color: "green",
//       },
//       //   "::after": {
//       //     // content: "",
//       //     // background: `lineaar-gradient(to top, #FFFFFFEF, #FFFFFF00 80%)`,
//       //     // width: "80%",
//       //     // height: "50%",
//       //     // position: "absolute",
//       //     // top: "50%",
//       //     // left: "50%",
//       //     // transform: `translate(-50%, 0)`,
//       //     // zIndex: 1,
//       //     content: " <- EXCITING!",
//       //     color: "green",
//       //   },
//       ":hover": {
//         // backgroundColor,
//         background: "red",
//         color: contentColor,
//         WebkitTapHighlightColor: "transparent",
//         outline: "none",
//         msTouchAction: "manipulation",
//         touchAction: "manipulation",
//       },
//       ":active": {
//         // backgroundColor,
//         background,
//         color: contentColor,
//         WebkitTapHighlightColor: "transparent",
//         outline: "none",
//         msTouchAction: "manipulation",
//         touchAction: "manipulation",
//       },
//       ":disabled": {
//         // backgroundColor: background,
//         background,
//         color: contentColor,
//         cursor: "not-allowed",
//       },
//     };
//   }
// );

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

// export const StyledButton = styled.button.attrs<
//   ButtonProps & BoxProps,
//   ButtonProps & BoxProps
// >((props) => {
//   return props.dense
//     ? { p: 0, m: 0, ...props }
//     : {
//         pt: 2,
//         pb: 2,
//         pl: 4,
//         pr: 4,
//         ...props,
//       };
// })<ButtonProps & BoxProps>`
//   border: none;
//   cursor: pointer;
//   font-weight: 500;
//   font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//     Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   font-size: 1rem;
//   line-height: 1.625rem;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   min-height: 2.625rem;
//   align-items: center;
//   justify-content: center;
//   width: ${(p) => (p.fullwidth ? "100%" : "auto")};
//   gap: ${(p) => calcSpacing(p.theme.layout.defaultSpacing, 2)};
//   border-radius: ${(p) => p.theme.layout.borderRadius};
//   ${getBoxStyles};
//   ${buttonMixin};
// `;

export const StyledButton = styled.button<ButtonProps & BoxProps>`
  position: relative;
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

export const Button: FC<ButtonProps & BoxProps & TypographySizeProps> = ({
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
    <Box>
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
    </Box>
  );
};
