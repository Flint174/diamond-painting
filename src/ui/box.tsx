import styled, { css } from "styled-components";

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

export const getBoxStyles = css<BoxProps>((props) => {
  const { defaultSpacing } = props.theme.layout;
  const digitsRegexp = /^[\d.]+/;
  const unitsRegexp = /\D*$/;
  const digits = parseFloat(
    (digitsRegexp.exec(`${defaultSpacing}`) || ["0"])[0] || "0"
  );
  const units = (unitsRegexp.exec(`${defaultSpacing}`) || [""])[0] || "px";

  return {
    ...(props.m ? { margin: `${props.m * digits}${units}` } : {}),
    ...(props.mb ? { marginBottom: `${props.mb * digits}${units}` } : {}),
    ...(props.mt ? { marginTop: `${props.mt * digits}${units}` } : {}),
    ...(props.ml ? { marginLeft: `${props.ml * digits}${units}` } : {}),
    ...(props.mr ? { marginRight: `${props.mr * digits}${units}` } : {}),
    ...(props.p ? { padding: `${props.p * digits}${units}` } : {}),
    ...(props.pb ? { paddingBottom: `${props.pb * digits}${units}` } : {}),
    ...(props.pt ? { paddingTop: `${props.pt * digits}${units}` } : {}),
    ...(props.pl ? { paddingLeft: `${props.pl * digits}${units}` } : {}),
    ...(props.pr ? { paddingRight: `${props.pr * digits}${units}` } : {}),
  };
});

export const Box = styled.div`
  display: block;
  box-sizing: border-box;
  ${getBoxStyles}
`;
