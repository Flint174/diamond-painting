import styled, { css } from "styled-components";
import { calcSpacing } from "./utils/spacing";

export interface BoxProps {
  m?: number;
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  p?: number;
  pb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
}

export const getBoxStyles = css<BoxProps>(
  ({ m, mb, mt, ml, mr, p, pb, pl, pr, pt, ...props }) => {
    const { defaultSpacing } = props.theme.layout;

    return {
      margin: m && calcSpacing(defaultSpacing, m),
      marginBottom: mb && calcSpacing(defaultSpacing, mb),
      marginTop: mt && calcSpacing(defaultSpacing, mt),
      marginLeft: ml && calcSpacing(defaultSpacing, ml),
      marginRight: mr && calcSpacing(defaultSpacing, mr),

      padding: p && calcSpacing(defaultSpacing, p),
      paddingBottom: pb && calcSpacing(defaultSpacing, pb),
      paddingTop: pt && calcSpacing(defaultSpacing, pt),
      paddingLeft: pl && calcSpacing(defaultSpacing, pl),
      paddingRight: pr && calcSpacing(defaultSpacing, pr),
    };
  }
);

export const Box = styled.div`
  display: block;
  box-sizing: border-box;
  ${getBoxStyles}
`;
