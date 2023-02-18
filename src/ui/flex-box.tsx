import styled, { css } from "styled-components";
import { BoxProps, getBoxStyles } from "./box";
import { calcSpacing } from "./utils/spacing";

export interface FlexBoxProps {
  flex?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  items?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  self?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  content?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "strentch";
  grow?: number;
  shrink?: number;
  basis?: number;
  gap?: number;
}

export const getFlexStyles = css<FlexBoxProps>(
  ({
    flex: direction,
    wrap,
    justify,
    items,
    self,
    content,
    grow,
    shrink,
    basis,
    gap,
    ...props
  }) => {
    const { defaultSpacing } = props.theme.layout;
    return {
      ...(direction ? { display: "flex", flexDirection: direction } : {}),
      flexWrap: wrap,
      justifyContent: justify,
      alignItems: items,
      alignSelf: self,
      alignContent: content,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis && calcSpacing(defaultSpacing, basis),
      gap: gap && calcSpacing(defaultSpacing, gap),
    };
  }
);

export const FlexBox = styled.div<FlexBoxProps & BoxProps>`
  margin: 0;
  padding: 0;
  display: block;
  box-sizing: border-box;
  ${getBoxStyles};
  ${getFlexStyles};
`;
